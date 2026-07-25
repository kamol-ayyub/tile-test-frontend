import { CartIcon, UserIcon } from "@/shared/components/brand-icons";
import { NAV_LINKS } from "@/shared/data";

export function NavBar() {
  return (
    <nav className="border-b-2 border-navy bg-cream" aria-label="Primary">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-2 px-4 py-2.5 sm:px-6 md:px-10">
        {/* macOS Window dots (o o o) */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-3 rounded-full border border-navy/30 bg-[#FF5F56]" />
          <span className="size-3 rounded-full border border-navy/30 bg-[#FFBD2E]" />
          <span className="size-3 rounded-full border border-navy/30 bg-[#27C93F]" />
        </div>

        {/* Center Nav Links */}
        <ul className="flex items-center justify-center gap-4 text-xs sm:gap-6 sm:text-[13px]">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="font-bold tracking-wide transition-colors hover:text-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right User Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span
            className="relative cursor-pointer"
            role="img"
            aria-label="Shopping cart, 3 items"
          >
            <CartIcon className="size-5 text-navy" />
            <span
              aria-hidden="true"
              className="absolute -right-1.5 -top-1.5 flex size-3.5 items-center justify-center rounded-full bg-mustard border border-navy text-[9px] font-bold text-navy"
            >
              2
            </span>
          </span>
          <UserIcon className="size-5 text-navy" />
          <a
            href="#"
            className="rounded-md border border-navy bg-navy px-2.5 py-1 text-xs font-bold text-cream transition hover:bg-terracotta-dark"
          >
            Log In
          </a>
        </div>
      </div>
    </nav>
  );
}
