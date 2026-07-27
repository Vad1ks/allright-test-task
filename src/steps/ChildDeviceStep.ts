import { Page } from "@playwright/test";
import { PickOptionStep } from "../core/quiz_base_steps/PickOptionStep";

export class ChildDeviceStep extends PickOptionStep {
  protected static readonly STEP_NAME = "child-device";

  constructor(page: Page) {
    super(page);
  }
}

