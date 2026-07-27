import { Page } from "@playwright/test";
import { PickOptionStep } from "../core/quiz_base_steps/PickOptionStep";

export class ScheduleFlexibilityStep extends PickOptionStep {
  protected static readonly STEP_NAME = "schedule-flexibility";

  constructor(page: Page) {
    super(page);
  }
}
