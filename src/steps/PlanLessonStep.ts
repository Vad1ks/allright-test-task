import { Page } from "@playwright/test";
import { PickOptionStep } from "../core/quiz_base_steps/PickOptionStep";

export class PlanLessonStep extends PickOptionStep {
  protected static readonly STEP_NAME = "plan-lesson";

  constructor(page: Page) {
    super(page);
  }
}
