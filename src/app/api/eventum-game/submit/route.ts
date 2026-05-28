import { NextResponse } from "next/server";

const REQUIRED_PAYLOAD_FIELDS = [
  "name",
  "email",
  "telegramId",
  "answers",
  "strategistScore",
  "executorScore",
  "visionaryScore",
  "mainPath",
  "secondaryPath",
  "isBlended",
  "submittedAt",
  "status",
  "userAgent",
  "source",
] as const;

type DebugStatus = {
  hasWebhook: boolean;
  missingFields: string[];
  webhookStatus?: number;
  webhookResponseText?: string;
  error?: string;
  errorName?: string;
  errorCause?: string;
  errorCauseCode?: string;
};

function withDevelopmentDebug(
  body: {
    success: boolean;
    saved: boolean;
    warning?: string;
  },
  debugStatus: DebugStatus,
) {
  return NextResponse.json({
    ...body,
    ...(process.env.NODE_ENV === "development" ? { debugStatus } : {}),
  });
}

function getMissingFields(payload: Record<string, unknown>) {
  return REQUIRED_PAYLOAD_FIELDS.filter((field) => payload[field] == null);
}

function parseWebhookSavedState(responseText: string) {
  if (!responseText.trim()) {
    return true;
  }

  try {
    const parsed = JSON.parse(responseText) as {
      success?: unknown;
      saved?: unknown;
    };

    if (parsed.success === false || parsed.saved === false) {
      return false;
    }
  } catch {
    // Non-JSON webhook responses are allowed as long as the HTTP response is OK.
  }

  return true;
}

function getErrorDebug(error: unknown) {
  if (!(error instanceof Error)) {
    return {
      error: String(error),
    };
  }

  const cause = error.cause;
  const causeRecord =
    cause && typeof cause === "object"
      ? (cause as { code?: unknown; message?: unknown; name?: unknown })
      : undefined;

  return {
    error: error.message,
    errorName: error.name,
    errorCause:
      typeof causeRecord?.message === "string"
        ? causeRecord.message
        : cause
          ? String(cause)
          : undefined,
    errorCauseCode:
      typeof causeRecord?.code === "string" ? causeRecord.code : undefined,
  };
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    const body = await request.json();
    payload = body && typeof body === "object" ? body : {};
  } catch (error) {
    console.warn("[eventum-game-submit] Invalid JSON payload", error);

    return NextResponse.json(
      { success: false, saved: false, warning: "Invalid JSON payload" },
      { status: 400 },
    );
  }

  const submissionPayload = {
    ...payload,
    userAgent:
      payload.userAgent ?? request.headers.get("user-agent") ?? "unknown",
    source: payload.source ?? "eventum-game-landing",
  };
  const missingFields = getMissingFields(submissionPayload);
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const hasWebhook = Boolean(webhookUrl);

  console.info("[eventum-game-submit] webhook configured:", hasWebhook);

  if (missingFields.length > 0) {
    console.warn("[eventum-game-submit] Missing payload fields:", missingFields);
  }

  if (!webhookUrl) {
    console.warn("[eventum-game-submit] Google Sheets webhook is not configured");

    return withDevelopmentDebug(
      {
        success: true,
        saved: false,
        warning: "Google Sheets webhook is not configured",
      },
      { hasWebhook, missingFields },
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submissionPayload),
      signal: AbortSignal.timeout(15000),
    });
    const responseText = await response.text();

    console.info(
      "[eventum-game-submit] webhook response status:",
      response.status,
    );
    console.info(
      "[eventum-game-submit] webhook response text:",
      responseText,
    );

    const debugStatus = {
      hasWebhook,
      missingFields,
      webhookStatus: response.status,
      webhookResponseText: responseText,
    };

    if (!response.ok || !parseWebhookSavedState(responseText)) {
      console.warn("[eventum-game-submit] Could not save to Google Sheets", {
        status: response.status,
        responseText,
      });

      return withDevelopmentDebug(
        {
          success: true,
          saved: false,
          warning: "Could not save to Google Sheets",
        },
        debugStatus,
      );
    }

    return withDevelopmentDebug(
      { success: true, saved: true },
      debugStatus,
    );
  } catch (error) {
    const errorDebug = getErrorDebug(error);

    console.warn("[eventum-game-submit] Webhook request failed:", error);

    return withDevelopmentDebug(
      {
        success: true,
        saved: false,
        warning: "Could not save to Google Sheets",
      },
      {
        hasWebhook,
        missingFields,
        ...errorDebug,
      },
    );
  }
}
