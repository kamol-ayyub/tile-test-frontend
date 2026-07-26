import { PlusIcon, TrashIcon } from "@/shared/components/brand-icons";
import { CART_ITEMS } from "@/shared/data";
import { TILE_ICONS } from "@/shared/components/tile-icons";

const COLUMNS = [
  "TILE COLLECTION",
  "ITEM",
  "QUANTITY\n(sq. ft.)",
  "UNIT PRICE\n($)",
  "ACTIONS",
] as const;

const TOTAL_LABELS = ["SUBTOTAL:", "SHIPPING:", "GRAND TOTAL:"] as const;

export function CartTable() {
  return (
    <section>
      <h2 className="font-display text-lg max-md:text-[clamp(0.85rem,4.3vw,1.125rem)]">SHOPPING CART & DESIGN TOOL</h2>

      <div className="mt-3 overflow-hidden rounded-sm border-2 border-navy max-md:overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {COLUMNS.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="border border-navy bg-tan px-1.5 py-1 text-[10px] font-bold leading-tight whitespace-pre-line max-md:text-[9px]"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CART_ITEMS.map((item) => {
              const Icon = TILE_ICONS[item.icon];
              return (
                <tr key={item.id}>
                  <td className="border border-navy p-1.5 max-md:p-1">
                    <div className="flex flex-col items-center gap-1">
                      <Icon className="size-11 max-md:size-8 rounded-sm border border-navy" />
                      <span className="text-center text-[9px] font-bold leading-none max-md:text-[8px]">
                        {item.name}
                      </span>
                    </div>
                  </td>
                  <td className="border border-navy p-1.5 max-md:p-1">
                    <Icon className="mx-auto size-16 max-md:size-12" />
                  </td>
                  <td className="border border-navy p-1.5 max-md:p-1 text-center">
                    <span className="inline-block min-w-12 rounded-sm  py-1 text-xs font-bold whitespace-nowrap tabular-nums max-md:min-w-10 max-md:text-[11px]">
                      [ {item.quantity} ]
                    </span>
                  </td>
                  <td className="border border-navy p-1.5 max-md:p-1 text-center">
                    <span className="inline-block min-w-14 rounded-sm  py-1 text-xs font-bold whitespace-nowrap tabular-nums max-md:min-w-12 max-md:text-[11px]">
                      [ ${item.unitPrice.toFixed(2)} ]
                    </span>
                  </td>
                  <td className="border border-navy p-1.5 max-md:p-1">
                    <div className="flex items-start justify-center gap-2">
                      <span className="flex flex-col items-center gap-0.5">
                        <button
                          type="button"
                          className="flex size-6 items-center justify-center rounded-sm bg-leaf transition hover:brightness-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                          aria-label={`Add ${item.name}`}
                        >
                          <PlusIcon className="size-3.5 text-cream" />
                        </button>
                        <span className="text-[8px] font-bold">ADD</span>
                      </span>
                      <span className="flex flex-col items-center gap-0.5">
                        <button
                          type="button"
                          className="flex size-6 items-center justify-center rounded-sm bg-terracotta transition hover:brightness-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                          aria-label={`Remove ${item.name}`}
                        >
                          <TrashIcon className="size-3.5 text-cream" />
                        </button>
                        <span className="text-[8px] font-bold">REMOVE</span>
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex items-start justify-between gap-3 max-md:flex-wrap">
        <button
          type="button"
          className="flex bg-cream items-center gap-1.5 rounded-sm border border-navy px-2 py-1 transition-colors hover:bg-tan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
        >
          <PlusIcon className="size-3.5 shrink-0 text-terracotta" />
          <span className="text-left text-[9px] font-bold leading-tight">
            ADD NEW TILE TO CART
          </span>
        </button>
        <dl className="space-y-1">
          {TOTAL_LABELS.map((label) => {
            const isGrandTotal = label === "GRAND TOTAL:";
            return (
              <div key={label} className="flex items-center justify-end gap-2">
                <dt className="text-[10px] font-bold">{label}</dt>
                <dd
                  className={`flex h-6 w-20 items-center justify-between rounded-sm border border-navy px-1.5 text-xs font-bold tabular-nums ${isGrandTotal ? "bg-cream" : ""
                    }`}
                >
                  <span>[</span>
                  <span>]</span>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
