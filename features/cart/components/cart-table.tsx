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
    <section className="w-full">
      <h2 className="hidden sm:block font-display text-lg">SHOPPING CART & DESIGN TOOL</h2>

      <div className="mt-2 sm:mt-3 overflow-x-auto rounded-sm border-2 border-navy bg-cream">
        <table className="w-full min-w-[340px] border-collapse text-left">
          <thead>
            <tr>
              {COLUMNS.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="border border-navy bg-tan px-1.5 py-1 text-center text-[9px] sm:text-[10px] font-bold leading-tight whitespace-pre-line"
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
                <tr key={item.id} className="hover:bg-cream-light/40">
                  <td className="border border-navy p-1 sm:p-1.5 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <Icon className="size-8 sm:size-11 rounded-sm border border-navy" />
                      <span className="text-center text-[8px] sm:text-[9px] font-bold leading-none">
                        {item.name}
                      </span>
                    </div>
                  </td>
                  <td className="border border-navy p-1 sm:p-1.5">
                    <Icon className="mx-auto size-10 sm:size-14" />
                  </td>
                  <td className="border border-navy p-1 sm:p-1.5 text-center">
                    <span className="inline-block rounded-sm px-1 py-0.5 text-xs font-bold whitespace-nowrap tabular-nums">
                      [ {item.quantity} ]
                    </span>
                  </td>
                  <td className="border border-navy p-1 sm:p-1.5 text-center">
                    <span className="inline-block rounded-sm px-1 py-0.5 text-xs font-bold whitespace-nowrap tabular-nums">
                      [ ${item.unitPrice.toFixed(2)} ]
                    </span>
                  </td>
                  <td className="border border-navy p-1 sm:p-1.5">
                    <div className="flex items-start justify-center gap-1.5 sm:gap-2">
                      <span className="flex flex-col items-center gap-0.5">
                        <button
                          type="button"
                          className="flex size-5 sm:size-6 items-center justify-center rounded-sm bg-leaf transition hover:brightness-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                          aria-label={`Add ${item.name}`}
                        >
                          <PlusIcon className="size-3 text-cream" />
                        </button>
                        <span className="text-[7px] sm:text-[8px] font-bold">ADD</span>
                      </span>
                      <span className="flex flex-col items-center gap-0.5">
                        <button
                          type="button"
                          className="flex size-5 sm:size-6 items-center justify-center rounded-sm bg-terracotta transition hover:brightness-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                          aria-label={`Remove ${item.name}`}
                        >
                          <TrashIcon className="size-3 text-cream" />
                        </button>
                        <span className="text-[7px] sm:text-[8px] font-bold">REMOVE</span>
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-2.5 sm:mt-3 flex flex-wrap items-start justify-between gap-3">
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-sm border-2 border-navy bg-cream px-2 py-1 transition-colors hover:bg-tan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
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
                  className={`flex h-6 w-20 items-center justify-between rounded-sm border border-navy px-1.5 text-xs font-bold tabular-nums ${
                    isGrandTotal ? "bg-tan/60" : "bg-cream"
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
