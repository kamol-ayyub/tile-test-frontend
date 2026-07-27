import { TILE_CATALOG } from '@/shared/data';
import type { Tile } from '@/shared/data';

export const SHIPPING_FLAT_RATE = 25;
export const FREE_SHIPPING_THRESHOLD = 500;

export type PricedItem = {
  id: string;
  quantity: number;
};

export type CartLine = Tile & {
  quantity: number;
  lineTotal: number;
};

export type CartSummary = {
  lines: CartLine[];
  subtotal: number;
  shipping: number;
  grandTotal: number;
};

export function getCartLines(items: PricedItem[]): CartLine[] {
  return items.flatMap((item) => {
    const tile = TILE_CATALOG.find((candidate) => candidate.id === item.id);
    if (!tile) {
      return [];
    }
    return [
      {
        ...tile,
        quantity: item.quantity,
        lineTotal: tile.unitPrice * item.quantity,
      },
    ];
  });
}

export function calculateShipping(subtotal: number): number {
  if (subtotal === 0 || subtotal > FREE_SHIPPING_THRESHOLD) {
    return 0;
  }
  return SHIPPING_FLAT_RATE;
}

export function getCartSummary(items: PricedItem[]): CartSummary {
  const lines = getCartLines(items);
  const subtotal = lines.reduce((sum, line) => sum + line.lineTotal, 0);
  const shipping = calculateShipping(subtotal);

  return { lines, subtotal, shipping, grandTotal: subtotal + shipping };
}

export function getAvailableTiles(items: PricedItem[]): Tile[] {
  const idsInCart = new Set(items.map((item) => item.id));

  return TILE_CATALOG.filter((tile) => !idsInCart.has(tile.id));
}

export function shouldRemoveOnDecrease(
  quantity: number,
  step: number,
): boolean {
  return quantity <= step;
}
