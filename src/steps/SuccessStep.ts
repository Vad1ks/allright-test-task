import { expect } from "@playwright/test";
import { BaseStep } from "../core/quiz_base_steps/BaseStep";

export class SuccessStep extends BaseStep {
  async complete(): Promise<void> {
    await expect(this.page.getByText(/Ваш запит отримано/i)).toBeVisible();
  }

  override async waitForStepChange(): Promise<void> {
    // nothing to wait for
  }
}
