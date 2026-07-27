import { Page } from "@playwright/test";
import { PickOptionStep } from "../core/quiz_base_steps/PickOptionStep";

export class SpeakingClubsStep extends PickOptionStep {
  protected static readonly STEP_NAME = "speaking-clubs";

  constructor(page: Page) {
    super(page);
  }
}
