import { PALETTE_TILES } from "@/shared/data";
import { TILE_ICONS } from "@/shared/components/tile-icons";

export function DesignPalette() {
  return (
    <aside className="w-full sm:w-41 shrink-0 border-t-2 sm:border-t-0 sm:border-l-2 border-navy bg-cream p-3">
      <h3 className="whitespace-nowrap rounded-md border-2 border-navy bg-cream px-2 py-0.5 text-center font-display text-[13px]">
        DESIGN PALETTE
      </h3>
      <div className="mt-3 grid grid-cols-4 sm:grid-cols-2 gap-2">
        {PALETTE_TILES.map((name) => {
          const Icon = TILE_ICONS[name];
          return (
            <span key={name} className="block overflow-hidden rounded-sm border border-navy aspect-square">
              <Icon className="block size-full" />
            </span>
          );
        })}
      </div>
    </aside>
  );
}
