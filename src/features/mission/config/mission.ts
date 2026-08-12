import {
  organization,
} from "@/config";

import type {
  MissionConfig,
} from "../types/mission";


/**
 * Homepage Mission section configuration.
 */
export const missionConfig = {
  eyebrow:
    "Our Mission",

  title:
    "A place for every young performer to shine.",

  description:
    organization.mission,

  supportingText:
    organization.goal,

} satisfies MissionConfig;