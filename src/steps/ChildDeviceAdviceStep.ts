import { Locator, Page } from "@playwright/test";
import { BaseStep } from "../core/quiz_base_steps/BaseStep";

export class ChildDeviceAdviceStep extends BaseStep {
  static readonly STEP_NAME = "child-device-advice";

  private readonly nextStepButton: Locator;

  constructor(page: Page) {
    super(page);
    this.nextStepButton = this.page.locator("[data-step-name] button");
  }

  override async complete(): Promise<void> {
    await this.nextStepButton.click();
  }
}
