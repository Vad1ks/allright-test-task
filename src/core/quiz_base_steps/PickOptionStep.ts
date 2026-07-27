import { Locator, Page } from "@playwright/test";
import { BaseStep } from "./BaseStep";

export class PickOptionStep extends BaseStep {
  protected readonly optionButtons: Locator;

  constructor(page: Page) {
    super(page);
    this.optionButtons = this.page.locator("[data-mode]");
  }

  override async complete(): Promise<void> {
    await this.pickRandomOption();
  }

  async pickRandomOption(): Promise<void> {
    const count = await this.optionButtons.count();
    const randomIndex = Math.floor(Math.random() * count);
    await this.optionButtons.nth(randomIndex).click();
  }
}
