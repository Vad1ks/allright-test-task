import { Locator, Page } from "@playwright/test";
import { BaseStep } from "../core/quiz_base_steps/BaseStep";

export class UserInfoPhoneStep extends BaseStep {
  static readonly STEP_NAME = "user-info-phone";

  private readonly nextStepButton: Locator;
  private readonly phoneInput: Locator;

  constructor(page: Page) {
    super(page);
    this.nextStepButton = this.page.locator("[data-step-name] button");
    this.phoneInput = this.page.locator("[data-step-name] input");
  }

  override async complete(): Promise<void> {
    await this.phoneInput.fill("661111111");
    await this.nextStepButton.click();
  }
}
