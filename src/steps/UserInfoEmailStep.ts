import { Locator, Page } from "@playwright/test";
import { BaseStep } from "../core/quiz_base_steps/BaseStep";

export class UserInfoEmailStep extends BaseStep {
  static readonly STEP_NAME = "user-info-email";

  private readonly nextStepButton: Locator;
  private readonly emailInput: Locator;

  constructor(page: Page) {
    super(page);
    this.nextStepButton = this.page.locator("[data-step-name] button");
    this.emailInput = this.page.locator("[data-step-name] input");
  }

  override async complete(): Promise<void> {
    await this.emailInput.fill("testmail@example.com");
    await this.nextStepButton.click();
  }
}
