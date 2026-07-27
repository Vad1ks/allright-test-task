import { expect, Locator, Page } from "@playwright/test";
import { BaseStep } from "../core/quiz_base_steps/BaseStep";

export class UserInfoPhoneStep extends BaseStep {
  protected static readonly STEP_NAME = "user-info-phone";

  private readonly nextStepButton: Locator;
  private readonly phoneInput: Locator;

  constructor(page: Page) {
    super(page);
    this.nextStepButton = this.page.getByRole("button", { name: "Продовжити" });
    this.phoneInput = this.page.locator("input[type='tel']");
  }

  override async complete(): Promise<void> {
    await expect(this.phoneInput).toHaveValue("+380"); //sometimes it takes time for the input to be filled with the default value, so we wait for it because if we input value too early, country code could be added into input field again
    await this.phoneInput.click();
    await this.phoneInput.pressSequentially("661111111");
    await this.nextStepButton.click();
  }
}
