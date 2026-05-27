import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    const body = await request.json();
    payload = body && typeof body === "object" ? body : {};
  } catch {
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

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json({
      success: true,
      saved: false,
      warning: "GOOGLE_SHEETS_WEBHOOK_URL is not configured",
    });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submissionPayload),
    });

    if (!response.ok) {
      return NextResponse.json({
        success: true,
        saved: false,
        warning: "Could not save to Google Sheets",
      });
    }

    return NextResponse.json({ success: true, saved: true });
  } catch {
    return NextResponse.json({
      success: true,
      saved: false,
      warning: "Could not save to Google Sheets",
    });
  }
}
