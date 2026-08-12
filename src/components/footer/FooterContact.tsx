import { contact } from "@/config";

/**
 * Public organization contact information.
 */
export default function FooterContact() {
  const hasAddress =
    contact.address &&
    (contact.address.street ||
      contact.address.city ||
      contact.address.state ||
      contact.address.postalCode);

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
        Contact
      </h2>

      <address
        className="
          grid
          gap-3
          text-sm
          not-italic
          text-white/80
        "
      >
        <a
          href={`mailto:${contact.email}`}
          className="
            transition-colors
            hover:text-white
          "
        >
          {contact.email}
        </a>

        {/* {contact.phoneNumber &&
          contact.phoneHref && (
            <a
              href={`tel:${contact.phoneHref}`}
              className="
                transition-colors
                hover:text-white
              "
            >
              {contact.phoneNumber}
            </a>
          )} */}

        {hasAddress && (
          <div>
            {contact.address?.street && <div>{contact.address.street}</div>}

            {/* {contact.address?.street2 && (
              <div>
                {contact.address.street2}
              </div>
            )} */}

            <div>
              {[
                contact.address?.city,
                contact.address?.state,
                contact.address?.postalCode,
              ]
                .filter(Boolean)
                .join(", ")}
            </div>
          </div>
        )}
      </address>
    </div>
  );
}
