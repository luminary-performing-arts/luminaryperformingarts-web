import Link from "next/link";

import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/src/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export type ButtonSize = "small" | "medium" | "large";

interface BaseButtonProps {
  children: ReactNode;

  className?: string;

  variant?: ButtonVariant;

  size?: ButtonSize;

  /**
   * Accessible label when visible content alone
   * does not sufficiently describe the action.
   */
  ariaLabel?: string;
}

interface LinkButtonProps extends BaseButtonProps {
  href: string;

  type?: never;

  disabled?: never;
}

interface ActionButtonProps
  extends
    BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: never;
}

export type ButtonProps = LinkButtonProps | ActionButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-[var(--color-primary)]",
    "text-[var(--color-text-inverse)]",
    "hover:bg-[var(--color-primary-light)]",
  ),

  secondary: cn(
    "bg-[var(--color-secondary)]",
    "text-[var(--color-primary-dark)]",
    "hover:bg-[var(--color-secondary-light)]",
  ),

  outline: cn(
    "border",
    "border-[var(--color-primary)]",
    "text-[var(--color-primary)]",
    "hover:bg-[var(--color-primary)]",
    "hover:text-white",
  ),

  ghost: cn(
    "text-[var(--color-primary)]",
    "hover:bg-[var(--color-surface-muted)]",
  ),
};

const sizeClasses: Record<ButtonSize, string> = {
  small: "min-h-10 px-5 py-2 text-sm",

  medium: "min-h-12 px-6 py-3 text-base",

  large: "min-h-14 px-8 py-4 text-lg",
};

const baseClasses = cn(
  "inline-flex",
  "items-center",
  "justify-center",
  "gap-2",
  "rounded-full",
  "font-semibold",
  "transition-colors",
  "duration-200",
  "focus-visible:outline",
  "focus-visible:outline-2",
  "focus-visible:outline-offset-2",
  "focus-visible:outline-[var(--color-secondary)]",
);

/**
 * Shared button component supporting both navigation links
 * and native button actions.
 */
export default function Button(props: ButtonProps) {
  const {
    children,
    className,
    variant = "primary",
    size = "medium",
    ariaLabel,
  } = props;

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} aria-label={ariaLabel} className={classes}>
        {children}
      </Link>
    );
  }

  const {
    href: _href,
    ariaLabel: _ariaLabel,
    variant: _variant,
    size: _size,
    ...buttonProps
  } = props as ActionButtonProps & {
    href?: never;
  };

  return (
    <button {...buttonProps} aria-label={ariaLabel} className={classes}>
      {children}
    </button>
  );
}
