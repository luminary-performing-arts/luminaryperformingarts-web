import { social } from "@/config";

/**
 * Public social profile links.
 *
 * Returns nothing until at least one enabled social profile exists.
 */
export default function FooterSocial() {
  const enabledProfiles = (
    social.profiles as Array<{
      enabled?: boolean;
      href: string;
      label: string;
      platform: string;
    }>
  ).filter((profile) => profile.enabled);

  if (enabledProfiles.length === 0) {
    return null;
  }

  return (
    <div>
      <h2
        className="
          mb-4
          text-sm
          font-semibold
          uppercase
          tracking-[0.16em]
          text-[var(--color-secondary-light)]
        "
      >
        Follow
      </h2>

      <ul
        className="
          flex
          flex-wrap
          gap-4
        "
      >
        {enabledProfiles.map((profile) => (
          <li key={profile.platform}>
            <a
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                  text-sm
                  text-white/80
                  transition-colors
                  hover:text-white
                "
            >
              {profile.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
