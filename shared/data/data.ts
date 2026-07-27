import type { TileName } from '@/shared/components/tile-icons';

export const NAV_LINKS = [
  'HOME',
  'SHOP',
  'COLLECTIONS',
  'ABOUT US',
  'FAQ',
  'GALLERY',
  'BLOG',
] as const;

export const FOOTER_LINKS = [
  'TERMS OF SERVICE',
  'PRIVACY POLICY',
  'SHIPPING INFO',
  'CONTACT US',
] as const;

export type Tile = {
  id: string;
  name: string;
  icon: TileName;
  unitPrice: number;
};

export const TILE_CATALOG: readonly Tile[] = [
  { id: 'ocean-wave', name: 'OCEAN WAVE', icon: 'oceanWave', unitPrice: 1.8 },
  { id: 'forest-fern', name: 'FOREST FERN', icon: 'forestFern', unitPrice: 2 },
  {
    id: 'terracotta-dot',
    name: 'TERRACOTTA DOT',
    icon: 'terracottaDot',
    unitPrice: 1.6,
  },
  {
    id: 'yellow-star',
    name: 'YELLOW STAR',
    icon: 'yellowStar',
    unitPrice: 1.9,
  },
  {
    id: 'orange-floral',
    name: 'ORANGE FLORAL',
    icon: 'orangeFloral',
    unitPrice: 1.7,
  },
  {
    id: 'blue-geometric',
    name: 'BLUE GEOMETRIC',
    icon: 'blueGeometric',
    unitPrice: 2.4,
  },
  { id: 'cross-plus', name: 'CROSS PLUS', icon: 'crossPlus', unitPrice: 1.5 },
  { id: 'solid-blue', name: 'SOLID BLUE', icon: 'solidBlue', unitPrice: 2.2 },
  {
    id: 'herringbone',
    name: 'HERRINGBONE',
    icon: 'herringbone',
    unitPrice: 2.1,
  },
  {
    id: 'paisley-leaf',
    name: 'PAISLEY LEAF',
    icon: 'paisleyLeaf',
    unitPrice: 2.6,
  },
];

export const HEADER_SWATCHES_LEFT: readonly TileName[] = [
  'solidBlue',
  'orangeFloral',
  'crossPlus',
];

export const HEADER_SWATCHES_RIGHT: readonly TileName[] = [
  'oceanWave',
  'terracottaDot',
  'yellowStar',
];

export const GRID_SIZE = 7;

export const PALETTE_TILES: readonly TileName[] = [
  'orangeFloral',
  'blueGeometric',
  'crossPlus',
  'yellowStar',
  'solidBlue',
  'herringbone',
  'paisleyLeaf',
  'oceanWave',
];
