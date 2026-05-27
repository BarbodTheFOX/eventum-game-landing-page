import type { PathType } from "@/data/eventumGameQuestions";
import type { EventumGameAnswers } from "./eventumGameScoring";

export type EventumGameSubmissionPayload = {
  name: string;
  email: string;
  telegramId: string;
  answers: EventumGameAnswers;
  strategistScore: number;
  executorScore: number;
  visionaryScore: number;
  mainPath: PathType;
  secondaryPath: PathType;
  isBlended: boolean;
  submittedAt: string;
  status: "submitted";
  userAgent: string;
  source: "eventum-game-landing";
};

export type EventumGameSubmissionResponse = {
  success: boolean;
  saved: boolean;
  warning?: string;
};

export async function submitEventumGameResult(
  payload: EventumGameSubmissionPayload,
): Promise<EventumGameSubmissionResponse> {
  const response = await fetch("/api/eventum-game/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return {
      success: true,
      saved: false,
      warning: "Could not save to Google Sheets",
    };
  }

  return response.json();
}
