import { Page } from "@playwright/test";
import { BaseStep } from "../core/quiz_base_steps/BaseStep";

export class UnknownStep extends BaseStep {
  constructor(
    page: Page,
    protected readonly stepName: string,
  ) {
    super(page);
  }

  async complete(): Promise<void> {
    throw new Error(`Unknown step detected: ${this.stepName}`);
  }
}
