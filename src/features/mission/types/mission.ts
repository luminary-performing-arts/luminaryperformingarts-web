/**
 * Homepage Mission feature configuration.
 */
export interface MissionConfig {
  /**
   * Small introductory label.
   */
  readonly eyebrow: string;

  /**
   * Primary Mission heading.
   */
  readonly title: string;

  /**
   * Supporting Mission statement.
   */
  readonly description: string;

  /**
   * Optional secondary supporting statement.
   */
  readonly supportingText?: string;
}