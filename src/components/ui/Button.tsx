import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? `
        bg-[var(--color-primary)]
        text-white
        hover:bg-[var(--color-secondary)]
      `
      : `
        border
        border-[var(--color-primary)]
        text-[var(--color-primary)]
      `;

  return (
    <Link
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        px-8
        py-4
        font-semibold
        transition
        duration-300
        ${styles}
      `}
    >
      {children}
    </Link>
  );
}