import { Page } from "@playwright/test";
import { PickOptionStep } from "../core/quiz_base_steps/PickOptionStep";

export class AgeStep extends PickOptionStep {
  protected static readonly STEP_NAME = "age-range";

  constructor(page: Page) {
    super(page);
  }
}
