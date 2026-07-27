import { Locator, Page } from "@playwright/test";
import { PickOptionStep } from "../core/quiz_base_steps/PickOptionStep";

export class UserInfoNameStep extends PickOptionStep {
  static readonly STEP_NAME = "user-info-name";

  private readonly nextStepButton: Locator;
  private readonly parentNameInput: Locator;

  constructor(page: Page) {
    super(page);
    this.nextStepButton = this.page.locator("[data-step-name] button");
    this.parentNameInput = this.page.locator("[data-step-name] input");
  }

  override async complete(): Promise<void> {
    await this.parentNameInput.fill("JohnDoeParent");
    await this.nextStepButton.click();
    await this.pickRandomOption();
  }
}
