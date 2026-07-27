import { Page } from "@playwright/test";
import { PickOptionStep } from "../core/quiz_base_steps/PickOptionStep";

export class ChildKnowEnglishStep extends PickOptionStep {
  protected static readonly STEP_NAME = "child-know-english";

  constructor(page: Page) {
    super(page);
  }
}
