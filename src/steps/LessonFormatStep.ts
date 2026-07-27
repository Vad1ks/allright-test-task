import { Page } from "@playwright/test";
import { PickOptionStep } from "../core/quiz_base_steps/PickOptionStep";

export class LessonFormatStep extends PickOptionStep {
  protected static readonly STEP_NAME = "lesson-format";

  constructor(page: Page) {
    super(page);
  }
}
