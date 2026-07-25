import { HEADER_SWATCHES_LEFT, HEADER_SWATCHES_RIGHT } from "@/shared/data";
import { KilnIllustration, TempleIllustration } from "./header-illustrations";
import { TILE_ICONS, type TileName } from "@/shared/components/tile-icons";

function Swatch({ name }: { name: TileName }) {
  const Icon = TILE_ICONS[name];
  return <Icon className="size-5 border border-navy" />;
}

export function PageHeader() {
  return (
    <section className="relative mx-auto flex shrink-0 max-w-[1400px] w-full items-center justify-between px-4 py-2 sm:px-8 sm:py-3">
      <TempleIllustration className="hidden sm:block h-10 md:h-14 w-auto shrink-0" />
      <div className="mx-auto text-center">
        <h1 className="font-display text-xl sm:text-2xl md:text-3xl leading-none tracking-tight">
          CERAMIC TILE ORDER FORM
        </h1>
        <div className="mt-1 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="flex gap-1">
            {HEADER_SWATCHES_LEFT.map((name) => (
              <Swatch key={name} name={name} />
            ))}
          </span>
          <p className="font-display text-base sm:text-lg md:text-xl tracking-wide whitespace-nowrap">
            THE ARTISAN KILN
          </p>
          <span className="flex gap-1">
            {HEADER_SWATCHES_RIGHT.map((name) => (
              <Swatch key={name} name={name} />
            ))}
          </span>
        </div>
      </div>
      <KilnIllustration className="hidden sm:block h-10 md:h-14 w-auto shrink-0" />
    </section>
  );
}
