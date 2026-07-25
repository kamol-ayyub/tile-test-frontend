import { CartTable } from "@/features/cart";
import { DesignPalette, DesignVisualizer } from "@/features/visualizer";
import { OrderSummary } from "@/features/checkout";
import { NavBar, PageHeader, SiteFooter } from "@/shared/layout";

export default function Home() {
  return (
    <div className="min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between overflow-y-auto lg:overflow-hidden bg-cream-light font-sans text-navy">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-cream"
      >
        Skip to main content
      </a>

      <NavBar />

      <div className="flex flex-1 flex-col justify-start lg:justify-center min-h-0 py-2">
        <PageHeader />

        <main
          id="main"
          className="mx-auto flex min-h-0 w-full max-w-[1400px] flex-col gap-6 px-4 sm:px-6 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:items-start lg:justify-between lg:gap-8 lg:px-8 py-2"
        >
          {/* Cart Table Column */}
          <div className="w-full md:col-span-1 lg:w-[390px] shrink-0">
            <CartTable />
          </div>

          {/* Visualizer & Palette Section */}
          <div className="w-full min-w-0 md:col-span-2 lg:col-span-1 lg:flex-1 order-last md:order-first lg:order-none">
            <section className="flex flex-col sm:flex-row items-stretch overflow-hidden rounded-md border-2 border-navy bg-cream shadow-sm">
              <DesignVisualizer />
              <DesignPalette />
            </section>
          </div>

          {/* Order Summary Column (Original 320px Desktop Width Preserved) */}
          <div className="w-full md:col-span-1 lg:w-[320px] shrink-0">
            <OrderSummary />
          </div>
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
