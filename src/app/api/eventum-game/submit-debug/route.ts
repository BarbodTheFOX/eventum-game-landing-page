import { NextResponse } from "next/server";

export async function GET() {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  let webhookHost: string | undefined;

  if (webhookUrl) {
    try {
      webhookHost = new URL(webhookUrl).host;
    } catch {
      webhookHost = "invalid-url";
    }
  }

  return NextResponse.json({
    success: true,
    hasWebhook: Boolean(webhookUrl),
    webhookHost,
    nodeEnv: process.env.NODE_ENV,
    source: "eventum-game-landing",
  });
}
