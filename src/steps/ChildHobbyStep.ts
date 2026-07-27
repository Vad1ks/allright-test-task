import { Locator, Page } from "@playwright/test";
import { PickOptionStep } from "../core/quiz_base_steps/PickOptionStep";

export class ChildHobbyStep extends PickOptionStep {
  static readonly STEP_NAME = "child-hobby";

  private readonly nextStepButton: Locator;

  constructor(page: Page) {
    super(page);
    this.nextStepButton = this.page.locator("[data-step-name] button");
  }

  override async complete(): Promise<void> {
    await this.pickRandomOptions();
    await this.nextStepButton.click();
  }

  async pickRandomOptions(): Promise<void> {
    const count = await this.optionButtons.count();

    const numberToSelect = Math.floor(Math.random() * count) + 1;

    const toBeSelected = new Set<number>();

    while (toBeSelected.size < numberToSelect) {
      toBeSelected.add(Math.floor(Math.random() * count));
    }

    for (const index of toBeSelected) {
      await this.optionButtons.nth(index).click();
    }
  }
}
