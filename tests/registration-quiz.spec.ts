import { test, expect } from "@playwright/test";
import { QuizRunner } from "../src/core/QuizRunner";

test.describe('Registration quiz', () => {
  let createdRequestId: string | undefined;

  test.afterEach(async () => {
    if (createdRequestId) {
      // Cleanup placeholder
    }
  });

  test('should complete registration quiz', async ({
    page,
  }) => {
    await page.goto('');

    const quizRunner = new QuizRunner(page);

    await quizRunner.completeQuiz();

    // createdRequestId = ...
  });
});
