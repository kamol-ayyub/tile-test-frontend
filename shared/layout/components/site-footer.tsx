import { FOOTER_LINKS } from "@/shared/data";

export function SiteFooter() {
  return (
    <footer className="shrink-0 py-4 text-center border-t border-navy/20 bg-cream">
      <ul className="flex items-center justify-center gap-4 text-xs font-bold">
        {FOOTER_LINKS.map((link, index) => (
          <li key={link} className="flex items-center gap-4">
            {index > 0 ? <span aria-hidden="true" className="text-navy/40">|</span> : null}
            <a
              href="#"
              className="transition-colors hover:text-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-1.5 text-[10px] sm:text-[11px] font-bold text-navy/80">
        © 2026 THE ARTISAN KILN. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
