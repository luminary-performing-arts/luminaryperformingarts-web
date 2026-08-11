/**
 * Google-related application integrations.
 */
export interface GoogleIntegrationConfig {
  readonly analyticsMeasurementId?: string;

  readonly tagManagerId?: string;

  readonly mapsApiEnabled: boolean;
}

/**
 * Email integration configuration.
 */
export interface EmailIntegrationConfig {
  readonly provider:
    "none" | "google-workspace" | "resend" | "sendgrid" | "other";

  readonly enabled: boolean;
}

/**
 * Donation integration configuration.
 */
export interface DonationIntegrationConfig {
  readonly provider: "none" | "stripe" | "paypal" | "external";

  readonly enabled: boolean;

  readonly donationUrl?: string;
}

/**
 * Complete third-party integration configuration.
 */
export interface IntegrationConfig {
  readonly google: GoogleIntegrationConfig;

  readonly email: EmailIntegrationConfig;

  readonly donations: DonationIntegrationConfig;
}
