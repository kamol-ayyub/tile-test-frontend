import { CartTable } from "@/features/cart";
import { DesignPalette, DesignVisualizer } from "@/features/visualizer";
import { OrderSummary } from "@/features/checkout";
import { NavBar, PageHeader, SiteFooter } from "@/shared/layout";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen flex-col justify-between overflow-hidden bg-cream-light font-sans text-navy">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-cream"
      >
        Skip to main content
      </a>

      <NavBar />

      <div className="flex flex-1 flex-col justify-center min-h-0 py-2">
        <PageHeader />

        <main
          id="main"
          className="mx-auto flex min-h-0 w-full max-w-[1400px] items-start justify-between gap-8 px-8"
        >
          <div className="w-[390px] shrink-0">
            <CartTable />
          </div>

          <div className="min-w-0 flex-1">
            <section className="flex items-stretch overflow-hidden rounded-md border-2 border-navy">
              <DesignVisualizer />
              <DesignPalette />
            </section>
          </div>

          <div className="w-[320px] shrink-0">
            <OrderSummary />
          </div>
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
