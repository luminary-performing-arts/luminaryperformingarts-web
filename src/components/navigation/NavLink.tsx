import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

export default function NavLink({
  href,
  label,
}: Props) {
  return (
    <Link
      href={href}
      className="
        uppercase
        tracking-[0.2em]
        text-sm
        hover:text-[var(--color-secondary)]
        transition
      "
    >
      {label}
    </Link>
  );
}