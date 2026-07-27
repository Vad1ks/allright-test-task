import { expect, Page } from "@playwright/test";

export abstract class BaseStep {
  protected static readonly STEP_NAME: string = "";

  constructor(protected page: Page) {}

  abstract complete(): Promise<void>;

  public static getStepName(): string {
    return this.STEP_NAME;
  }

  async waitForStepChange(): Promise<void> {
    const stepName = (this.constructor as typeof BaseStep).getStepName();
    await expect(this.page.locator(`[data-step-name="${stepName}"]`)).toHaveCount(0);
  }
}
