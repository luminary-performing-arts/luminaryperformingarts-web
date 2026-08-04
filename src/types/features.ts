/**
 * Application feature flags.
 *
 * These flags allow functionality to remain in the codebase while
 * controlling whether it is currently exposed to users.
 */
export interface FeatureConfig {
  readonly programs: boolean;

  readonly shows: boolean;

  readonly events: boolean;

  readonly testimonials: boolean;

  readonly donations: boolean;

  readonly contactForm: boolean;

  readonly consultationForm: boolean;

  readonly registration: boolean;

  readonly volunteerSignup: boolean;

  readonly newsletter: boolean;

  readonly blog: boolean;
}