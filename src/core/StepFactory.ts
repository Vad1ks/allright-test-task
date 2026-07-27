import { expect, Page } from "@playwright/test";
import { BaseStep } from "./quiz_base_steps/BaseStep";
import { UnknownStep } from "../steps/UnknownStep";
import { AgeStep } from "../steps/AgeStep";
import { ChildKnowEnglishStep } from "../steps/ChildKnowEnglishStep";
import { PlanLessonStep } from "../steps/PlanLessonStep";
import { MainThingStep } from "../steps/MainThingStep";
import { ScheduleFlexibilityStep } from "../steps/ScheduleFlexibilityStep";
import { ControlScheduleStep } from "../steps/ControlScheduleStep";
import { ChildDeviceStep } from "../steps/ChildDeviceStep";
import { ChildDeviceAdviceStep } from "../steps/ChildDeviceAdviceStep";
import { SpeakingClubsStep } from "../steps/SpeakingClubsStep";
import { SpeakingClubsInfoStep } from "../steps/SpeakingClubsInfoStep";
import { ProgressStep } from "../steps/ProgressStep";
import { HomeworkStep } from "../steps/HomeworkStep";
import { RepeatMaterialStep } from "../steps/RepeatMaterialStep";
import { LessonFormatStep } from "../steps/LessonFormatStep";
import { ChildNameStep } from "../steps/ChildNameStep";
import { ChildTemperamentStep } from "../steps/ChildTemperamentStep";
import { ChildHobbyStep } from "../steps/ChildHobbyStep";
import { UserInfoNameStep } from "../steps/UserInfoNameStep";
import { UserInfoPhoneStep } from "../steps/UserInfoPhoneStep";
import { UserInfoEmailStep } from "../steps/UserInfoEmailStep";
import { LessonTimeSelectStep } from "../steps/LessonTimeSelectStep";
import { SuccessStep } from "../steps/SuccessStep";
import { WhoUserIsStep } from "../steps/WhoUserIsStep";
import { NumberLessonsAtSchoolStep } from "../steps/NumberLessonsAtSchoolStep";

type StepConstructor = new (page: Page) => BaseStep;

const steps = new Map<string, StepConstructor>([
  [AgeStep.getStepName(), AgeStep],
  [ChildKnowEnglishStep.getStepName(), ChildKnowEnglishStep],
  [PlanLessonStep.getStepName(), PlanLessonStep],
  [MainThingStep.getStepName(), MainThingStep],
  [ScheduleFlexibilityStep.getStepName(), ScheduleFlexibilityStep],
  [ControlScheduleStep.getStepName(), ControlScheduleStep],
  [ChildDeviceStep.getStepName(), ChildDeviceStep],
  [ChildDeviceAdviceStep.getStepName(), ChildDeviceAdviceStep],
  [SpeakingClubsStep.getStepName(), SpeakingClubsStep],
  [SpeakingClubsInfoStep.getStepName(), SpeakingClubsInfoStep],
  [ProgressStep.getStepName(), ProgressStep],
  [HomeworkStep.getStepName(), HomeworkStep],
  [RepeatMaterialStep.getStepName(), RepeatMaterialStep],
  [LessonFormatStep.getStepName(), LessonFormatStep],
  [ChildNameStep.getStepName(), ChildNameStep],
  [ChildTemperamentStep.getStepName(), ChildTemperamentStep],
  [ChildHobbyStep.getStepName(), ChildHobbyStep],
  [UserInfoNameStep.getStepName(), UserInfoNameStep],
  [UserInfoPhoneStep.getStepName(), UserInfoPhoneStep],
  [UserInfoEmailStep.getStepName(), UserInfoEmailStep],
  [LessonTimeSelectStep.getStepName(), LessonTimeSelectStep],
  [WhoUserIsStep.getStepName(), WhoUserIsStep],
  [NumberLessonsAtSchoolStep.getStepName(), NumberLessonsAtSchoolStep],
]);

export class StepFactory {
  static async create(page: Page): Promise<BaseStep> {
    const stepLocator = page.locator("[data-step-name]");

    await expect
      .poll(
        async () => {
          if (page.url().includes("/request-gotten")) {
            return "success";
          }

          const count = await stepLocator.count();

          if (count === 1) {
            return "step";
          }

          return "loading";
        },
        {
          timeout: 10_000,
          message: "Neither a quiz step nor success page appeared",
        },
      )
      .not.toBe("loading");

    if (page.url().includes("/request-gotten")) {
      return new SuccessStep(page);
    }

    const stepName = await stepLocator.getAttribute("data-step-name");

    const StepClass = steps.get(stepName!);

    if (!StepClass) {
      return new UnknownStep(page, stepName!);
    }

    return new StepClass(page);
  }
}
