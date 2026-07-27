import { Page } from "@playwright/test";
import { PickOptionStep } from "../core/quiz_base_steps/PickOptionStep";

export class NumberLessonsAtSchoolStep extends PickOptionStep {
  protected static readonly STEP_NAME = "number-lessons-at-school";

  constructor(page: Page) {
    super(page);
  }
}
