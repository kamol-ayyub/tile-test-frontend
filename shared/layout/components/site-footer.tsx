import { FOOTER_LINKS } from "@/shared/data";

export function SiteFooter() {
  return (
    <footer className="shrink-0 py-2 text-center">
      <ul className="flex items-center justify-center gap-3 text-[11px] font-bold max-md:flex-wrap max-md:gap-y-1 max-md:px-4">
        {FOOTER_LINKS.map((link, index) => (
          <li key={link} className="flex items-center gap-3">
            {index > 0 ? <span aria-hidden="true" className="max-md:hidden">|</span> : null}
            <a
              href="#"
              className="transition-colors hover:text-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy max-md:block max-md:py-1"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-0.5 text-[11px] font-bold">
        © 2026 THE ARTISAN KILN. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
