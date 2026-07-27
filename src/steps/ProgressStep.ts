import { Page } from "@playwright/test";
import { PickOptionStep } from "../core/quiz_base_steps/PickOptionStep";

export class ProgressStep extends PickOptionStep {
  protected static readonly STEP_NAME = "progress";

  constructor(page: Page) {
    super(page);
  }
}
