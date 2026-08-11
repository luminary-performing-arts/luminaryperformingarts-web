/**
 * Postal address.
 */
export interface AddressConfig {
  readonly street?: string;
  readonly street2?: string;
  readonly city?: string;
  readonly state?: string;
  readonly postalCode?: string;
  readonly country: string;
}

/**
 * Standard operating-hours entry.
 */
export interface BusinessHoursConfig {
  readonly label: string;
  readonly days: string;
  readonly hours: string;
}

/**
 * Organization contact configuration.
 */
export interface ContactConfig {
  /**
   * Primary public email address.
   */
  readonly email: string;

  /**
   * Optional public telephone number.
   */
  readonly phone?: string;

  /**
   * Optional formatted telephone number suitable for tel: links.
   *
   * Example:
   * "+15555555555"
   */
  readonly phoneHref?: string;

  /**
   * Organization mailing or physical address.
   */
  readonly address?: AddressConfig;

  /**
   * Optional public business/office hours.
   */
  readonly businessHours?: readonly BusinessHoursConfig[];
}
