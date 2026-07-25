import { CartIcon, UserIcon } from "@/shared/components/brand-icons";
import { NAV_LINKS } from "@/shared/data";

export function NavBar() {
  return (
    <nav className="border-b-2 border-navy bg-cream" aria-label="Primary">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-10 py-3">
        {/* Placeholder to balance the right icons and keep NAV_LINKS centered */}
        <div className="w-[145px] shrink-0" aria-hidden="true" />

        <ul className="flex items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-[13px] font-bold tracking-wide transition-colors hover:text-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex w-[145px] shrink-0 items-center justify-end gap-3">
          <span
            className="relative"
            role="img"
            aria-label="Shopping cart, 3 items"
          >
            <CartIcon className="size-5" />
            <span
              aria-hidden="true"
              className="absolute -right-1.5 -top-1.5 flex size-3.5 items-center justify-center rounded-full bg-terracotta-dark text-[9px] font-bold text-cream"
            >
              3
            </span>
          </span>
          <UserIcon className="size-5" />
          <span className="rounded-full bg-navy px-3 py-1 text-xs font-bold text-cream">
            A. Smith
          </span>
        </div>
      </div>
    </nav>
  );
}
