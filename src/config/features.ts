import type { FeatureConfig } from "@/src/types";

/**
 * Application feature flags.
 *
 * These flags control presentation and feature availability.
 *
 * They are NOT authorization or security controls.
 */
export const features = {
  programs: true,

  shows: true,

  events: false,

  testimonials: true,

  donations: true,

  contactForm: true,

  consultationForm: false,

  registration: false,

  volunteerSignup: false,

  newsletter: false,

  blog: false,
} satisfies FeatureConfig;
