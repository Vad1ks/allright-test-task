import { Locator, Page } from "@playwright/test";
import { BaseStep } from "../core/quiz_base_steps/BaseStep";

export class ChildNameStep extends BaseStep {
  static readonly STEP_NAME = "child-name";

  private readonly nextStepButton: Locator;
  private readonly childNameInput: Locator;

  constructor(page: Page) {
    super(page);
    this.nextStepButton = this.page.locator("[data-step-name] button");
    this.childNameInput = this.page.locator("[data-step-name] input");
  }

  override async complete(): Promise<void> {
    await this.childNameInput.fill("John Doe");
    await this.nextStepButton.click();
  }
}
