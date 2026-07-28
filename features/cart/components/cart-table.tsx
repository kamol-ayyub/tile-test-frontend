'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { PlusIcon, TrashIcon } from '@/shared/components/brand-icons';
import { TILE_ICONS } from '@/shared/components/tile-icons';
import { formatPrice } from '@/shared/utils';
import {
  getCartSummary,
  type CartLine,
  shouldRemoveOnDecrease,
} from '@/features/cart';
import { AddTilePicker } from './add-tile-picker';
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  selectCartItems,
  SQUARE_FEET_STEP,
} from '../store';

const COLUMNS = [
  'TILE COLLECTION',
  'ITEM',
  'QUANTITY\n(sq. ft.)',
  'UNIT PRICE\n($)',
  'ACTIONS',
] as const;

export function CartTable() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const { lines, subtotal, shipping, grandTotal } = getCartSummary(items);

  const totals = [
    { label: 'SUBTOTAL:', value: subtotal, emphasize: false },
    { label: 'SHIPPING:', value: shipping, emphasize: false },
    { label: 'GRAND TOTAL:', value: grandTotal, emphasize: true },
  ] as const;

  const handleDecrease = (item: CartLine) => {
    if (shouldRemoveOnDecrease(item.quantity, SQUARE_FEET_STEP)) {
      if (window.confirm(`Remove ${item.name} from the cart?`)) {
        dispatch(removeItem(item.id));
      }
      return;
    }
    dispatch(decreaseQuantity(item.id));
  };

  return (
    <section>
      <h2 className='font-display text-lg max-md:text-[clamp(0.85rem,4.3vw,1.125rem)]'>
        SHOPPING CART & DESIGN TOOL
      </h2>

      <div className='mt-3 overflow-hidden rounded-sm border-2 border-navy max-md:overflow-x-auto'>
        <table className='w-full border-collapse'>
          <thead>
            <tr>
              {COLUMNS.map((column) => (
                <th
                  key={column}
                  scope='col'
                  className='border border-navy bg-tan px-1.5 py-1 text-[10px] font-bold leading-tight whitespace-pre-line max-md:text-[9px]'
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lines.length === 0 && (
              <tr>
                <td
                  colSpan={COLUMNS.length}
                  className='border border-navy p-3 text-center text-[10px] font-bold'
                >
                  YOUR CART IS EMPTY
                </td>
              </tr>
            )}
            <AnimatePresence initial={false}>
              {lines.map((item) => {
                const Icon = TILE_ICONS[item.icon];
                return (
                  <motion.tr
                    key={item.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                  >
                    <td className='border border-navy p-1.5 max-md:p-1'>
                      <div className='flex flex-col items-center gap-1'>
                        <Icon className='size-11 max-md:size-8 rounded-sm border border-navy' />
                        <span className='text-center text-[9px] font-bold leading-none max-md:text-[8px]'>
                          {item.name}
                        </span>
                      </div>
                    </td>
                    <td className='border border-navy p-1.5 max-md:p-1'>
                      <Icon className='mx-auto size-16 max-md:size-12' />
                    </td>
                    <td className='border border-navy p-1.5 max-md:p-1 text-center'>
                      <span className='inline-block min-w-12 rounded-sm  py-1 text-xs font-bold whitespace-nowrap tabular-nums max-md:min-w-10 max-md:text-[11px]'>
                        [ {item.quantity} ]
                      </span>
                    </td>
                    <td className='border border-navy p-1.5 max-md:p-1 text-center'>
                      <span className='inline-block min-w-14 rounded-sm  py-1 text-xs font-bold whitespace-nowrap tabular-nums max-md:min-w-12 max-md:text-[11px]'>
                        [ {formatPrice(item.unitPrice)} ]
                      </span>
                    </td>
                    <td className='border border-navy p-1.5 max-md:p-1'>
                      <div className='flex items-start justify-center gap-2'>
                        <span className='flex flex-col items-center gap-0.5'>
                          <button
                            type='button'
                            onClick={() => dispatch(increaseQuantity(item.id))}
                            className='flex size-6 cursor-pointer items-center justify-center rounded-sm bg-leaf transition hover:brightness-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy'
                            aria-label={`Increase ${item.name} quantity`}
                          >
                            <PlusIcon className='size-3.5 text-cream' />
                          </button>
                          <span className='text-[8px] font-bold'>ADD</span>
                        </span>
                        <span className='flex flex-col items-center gap-0.5'>
                          <button
                            type='button'
                            onClick={() => handleDecrease(item)}
                            className='flex size-6 items-center justify-center rounded-sm bg-terracotta transition hover:brightness-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy cursor-pointer'
                            aria-label={
                              item.quantity <= SQUARE_FEET_STEP
                                ? `Remove ${item.name} from cart`
                                : `Decrease ${item.name} quantity`
                            }
                          >
                            <TrashIcon className='size-3.5 text-cream' />
                          </button>
                          <span className='text-[8px] font-bold'>REMOVE</span>
                        </span>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      <div className='mt-3 flex items-start justify-between gap-3 max-md:flex-wrap'>
        <AddTilePicker />
        <dl className='space-y-1' aria-live='polite' aria-atomic='true'>
          {totals.map(({ label, value, emphasize }) => (
            <div key={label} className='flex items-center justify-end gap-2'>
              <dt className='text-[10px] font-bold'>{label}</dt>
              <dd
                className={`flex h-6 w-20 items-center justify-between rounded-sm border border-navy px-1.5 text-xs font-bold tabular-nums ${
                  emphasize ? 'bg-cream' : ''
                }`}
              >
                <span>[</span>
                <span>{formatPrice(value)}</span>
                <span>]</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
