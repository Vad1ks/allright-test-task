import { Page } from "@playwright/test";
import { StepFactory } from "./StepFactory";
import { SuccessStep } from "../steps/SuccessStep";

export class QuizRunner {
  private static readonly MAX_STEPS = 30;

  constructor(private readonly page: Page) {}

  async completeQuiz(): Promise<void> {
    let safetyCounter = 0;

    while (safetyCounter < QuizRunner.MAX_STEPS) {
      const step = await StepFactory.create(this.page);

      await step.complete();

      if (step instanceof SuccessStep) {
        return;
      }

      await step.waitForStepChange();

      safetyCounter++;
    }
  }
}
