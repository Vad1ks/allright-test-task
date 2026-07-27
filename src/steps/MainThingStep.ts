import { Page } from "@playwright/test";
import { PickOptionStep } from "../core/quiz_base_steps/PickOptionStep";

export class MainThingStep extends PickOptionStep {
  protected static readonly STEP_NAME = "main-thing";

  constructor(page: Page) {
    super(page);
  }
}
