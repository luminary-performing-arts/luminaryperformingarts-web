/**
 * Lightweight replacement for `clsx` to avoid a hard dependency.
 * Accepts strings, numbers, arrays, and objects with boolean values.
 */
type ClassValue = string | number | boolean | null | undefined | ClassValue[] | { [key: string]: unknown };

export function cn(...inputs: ClassValue[]): string {
  const res: string[] = [];

  const handle = (input: ClassValue) => {
    if (!input) return;
    if (typeof input === "string" || typeof input === "number") {
      res.push(String(input));
      return;
    }
    if (Array.isArray(input)) {
      input.forEach(handle);
      return;
    }
    if (typeof input === "object") {
      for (const key in input as Record<string, unknown>) {
        if ((input as Record<string, unknown>)[key]) res.push(key);
      }
    }
  };

  inputs.forEach(handle);
  return res.join(" ");
}
