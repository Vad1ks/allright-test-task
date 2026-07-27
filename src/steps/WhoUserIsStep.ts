import { Page } from "@playwright/test";
import { PickOptionStep } from "../core/quiz_base_steps/PickOptionStep";

export class WhoUserIsStep extends PickOptionStep {
  protected static readonly STEP_NAME = "who-user-is";

  constructor(page: Page) {
    super(page);
  }
}
