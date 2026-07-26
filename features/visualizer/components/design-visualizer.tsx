import { GRID_SIZE } from "@/shared/data";

const GRID_CELL_COUNT = GRID_SIZE * GRID_SIZE;

export function DesignVisualizer() {
  return (
    <div className="flex min-w-0 flex-1 flex-col bg-cream max-md:flex-none">
      <div className="p-3 pb-2 text-center">
        <h2 className="font-display text-lg">
          VISUALIZE YOUR ORDER:
        </h2>
        <p className="mt-0.5 text-xs font-bold">
          Drag and drop tiles here to create patterns.
        </p>
      </div>

      <div className="w-full flex-1 max-md:flex-none">
        <div
          className="grid w-full border-t border-navy/40"
          style={{
            gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
          }}
        >
          {Array.from({ length: GRID_CELL_COUNT }, (_, index) => (
            <div
              key={index}
              className="aspect-square border-r border-b border-navy/40 bg-cream"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
