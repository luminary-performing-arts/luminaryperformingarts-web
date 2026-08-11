import clsx, { type ClassValue } from "clsx";

/**
 * Combines conditional CSS class values into a single string.
 *
 * This utility provides a centralized abstraction around clsx
 * so components do not need to depend directly on the package.
 *
 * @example
 *
 * cn(
 *   "rounded-lg",
 *   isActive && "bg-blue-500",
 *   className
 * )
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
