import { HEADER_SWATCHES_LEFT, HEADER_SWATCHES_RIGHT } from "@/shared/data";
import { KilnIllustration, TempleIllustration } from "./header-illustrations";
import { TILE_ICONS, type TileName } from "@/shared/components/tile-icons";

function Swatch({ name }: { name: TileName }) {
  const Icon = TILE_ICONS[name];
  return <Icon className="size-5 border border-navy" />;
}

export function PageHeader() {
  return (
    <section className="mx-auto flex shrink-0 max-w-350 items-center justify-center gap-8 px-8 py-2">
      <TempleIllustration className="h-14 w-auto shrink-0" />
      <div className="text-center">
        <h1 className="font-display text-3xl leading-none tracking-tight">
          CERAMIC TILE ORDER FORM
        </h1>
        <div className="mt-1 flex items-center justify-center gap-3">
          <span className="flex gap-1">
            {HEADER_SWATCHES_LEFT.map((name) => (
              <Swatch key={name} name={name} />
            ))}
          </span>
          <p className="font-display text-xl tracking-wide">
            THE ARTISAN KILN
          </p>
          <span className="flex gap-1">
            {HEADER_SWATCHES_RIGHT.map((name) => (
              <Swatch key={name} name={name} />
            ))}
          </span>
        </div>
      </div>
      <KilnIllustration className="h-14 w-auto shrink-0" />
    </section>
  );
}
