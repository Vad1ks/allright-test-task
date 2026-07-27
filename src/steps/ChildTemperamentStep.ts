import { Page } from "@playwright/test";
import { PickOptionStep } from "../core/quiz_base_steps/PickOptionStep";

export class ChildTemperamentStep extends PickOptionStep {
  protected static readonly STEP_NAME = "temperament-child";

  constructor(page: Page) {
    super(page);
  }
}
