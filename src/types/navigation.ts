/**
 * Supported navigation targets.
 */
export type NavigationTarget =
  | "_self"
  | "_blank";


/**
 * Individual navigation entry.
 */
export interface NavigationItem {
  /**
   * Human-readable navigation label.
   */
  readonly label: string;

  /**
   * Internal or external destination.
   */
  readonly href: string;

  /**
   * Optional browser target.
   */
  readonly target?: NavigationTarget;

  /**
   * Whether the item represents an external destination.
   */
  readonly external?: boolean;

  /**
   * Whether this item should receive CTA styling.
   */
  readonly highlight?: boolean;

  /**
   * Optional accessibility label when the visible label
   * does not sufficiently describe the destination.
   */
  readonly ariaLabel?: string;
}


/**
 * Application navigation configuration.
 */
export interface NavigationConfig {
  /**
   * Primary site navigation.
   */
  readonly primary: readonly NavigationItem[];

  /**
   * Footer navigation.
   */
  readonly footer: readonly NavigationItem[];

  /**
   * Legal/policy navigation.
   */
  readonly legal: readonly NavigationItem[];
}