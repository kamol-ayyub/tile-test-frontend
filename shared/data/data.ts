import type { TileName } from "@/shared/components/tile-icons";

export const NAV_LINKS = [
  "HOME",
  "SHOP",
  "COLLECTIONS",
  "ABOUT US",
  "FAQ",
  "GALLERY",
  "BLOG",
] as const;

export const FOOTER_LINKS = [
  "TERMS OF SERVICE",
  "PRIVACY POLICY",
  "SHIPPING INFO",
  "CONTACT US",
] as const;

export type CartItem = {
  id: string;
  name: string;
  icon: TileName;
  quantity: number;
  unitPrice: number;
};

export const CART_ITEMS: readonly CartItem[] = [
  { id: "ocean-wave", name: "OCEAN WAVE", icon: "oceanWave", quantity: 150, unitPrice: 28 },
  { id: "forest-fern", name: "FOREST FERN", icon: "forestFern", quantity: 75, unitPrice: 30 },
  { id: "terracotta-dot", name: "TERRACOTTA DOT", icon: "terracottaDot", quantity: 200, unitPrice: 26 },
  { id: "yellow-star", name: "YELLOW STAR", icon: "yellowStar", quantity: 50, unitPrice: 29 },
];

export const HEADER_SWATCHES_LEFT: readonly TileName[] = [
  "solidBlue",
  "orangeFloral",
  "crossPlus",
];

export const HEADER_SWATCHES_RIGHT: readonly TileName[] = [
  "oceanWave",
  "terracottaDot",
  "yellowStar",
];

export const GRID_SIZE = 7;

export const PALETTE_TILES: readonly TileName[] = [
  "orangeFloral",
  "blueGeometric",
  "crossPlus",
  "yellowStar",
  "solidBlue",
  "herringbone",
  "paisleyLeaf",
  "oceanWave",
];

export const ORDER_TOTALS = {
  SUBTOTAL: "$266.00",
  SHIPPING: "$0.00",
  GRAND_TOTAL: "$299.00",
} as const;
