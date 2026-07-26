import { CartTable } from "@/features/cart";
import { DesignPalette, DesignVisualizer } from "@/features/visualizer";
import {
  CustomerDetails,
  PaymentMethods,
  PlaceOrderButton,
  ProjectNotes,
} from "@/features/checkout";
import { NavBar, PageHeader, SiteFooter } from "@/shared/layout";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col justify-between bg-cream-light font-sans text-navy">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-cream"
      >
        Skip to main content
      </a>

      <NavBar />

      <div className="flex flex-1 flex-col justify-center min-h-0 py-2 max-xl:justify-start">
        <PageHeader />

        <main
          id="main"
          className="mx-auto flex min-h-0 w-full max-w-[1400px] items-start justify-between gap-8 px-8 max-xl:flex-col max-xl:items-stretch md:max-xl:items-center md:max-xl:gap-8 md:max-xl:px-4 max-md:gap-8 max-md:px-4"
        >
          {/* Cart column */}
          <div className="w-[390px] shrink-0 max-xl:w-full md:max-xl:order-1 md:max-xl:max-w-[600px] max-md:order-1">
            <CartTable />
          </div>

          {/* Visualizer column */}
          <div className="min-w-0 flex-1 md:max-xl:order-2 md:max-xl:w-full md:max-xl:max-w-[600px] max-md:order-2">
            <section className="flex items-stretch overflow-hidden rounded-md border-2 border-navy max-md:flex-col">
              <DesignVisualizer />
              <DesignPalette />
            </section>
          </div>

          {/* Checkout column (flattened into the flow on phone) */}
          <div className="w-[320px] shrink-0 md:max-xl:w-full md:max-xl:max-w-[600px] md:max-xl:order-3 max-md:contents">
            <CustomerDetails />
            <ProjectNotes />
            <PaymentMethods />
            <PlaceOrderButton />
          </div>
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
