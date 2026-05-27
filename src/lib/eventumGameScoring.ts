import {
  eventumGameQuestions,
  type PathType,
} from "@/data/eventumGameQuestions";

export type LikertScore = 1 | 2 | 3 | 4 | 5;

export type EventumGameAnswers = Record<number, LikertScore>;

export type EventumGameResult = {
  strategistScore: number;
  executorScore: number;
  visionaryScore: number;
  mainPath: PathType;
  secondaryPath: PathType;
  isBlended: boolean;
};

export function calculateEventumGameResult(
  answers: EventumGameAnswers,
): EventumGameResult {
  const scores: Record<PathType, number> = {
    strategist: 0,
    executor: 0,
    visionary: 0,
  };

  for (const question of eventumGameQuestions) {
    scores[question.path] += answers[question.id] ?? 0;
  }

  const rankedPaths = (Object.entries(scores) as [PathType, number][])
    .sort((a, b) => b[1] - a[1]);

  const [mainPath, topScore] = rankedPaths[0];
  const [secondaryPath, secondScore] = rankedPaths[1];

  return {
    strategistScore: scores.strategist,
    executorScore: scores.executor,
    visionaryScore: scores.visionary,
    mainPath,
    secondaryPath,
    isBlended: topScore - secondScore <= 1,
  };
}
