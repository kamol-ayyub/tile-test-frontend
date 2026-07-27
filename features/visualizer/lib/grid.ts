import { GRID_SIZE, PALETTE_TILES } from "@/shared/data";
import type { TileName } from "@/shared/components/tile-icons";

export function getGridCellCount(gridSize = GRID_SIZE): number {
  return gridSize * gridSize;
}

export function getLastGridIndex(gridSize = GRID_SIZE): number {
  return getGridCellCount(gridSize) - 1;
}

export function getGridPosition(
  index: number,
  gridSize = GRID_SIZE,
): { row: number; col: number } {
  return {
    row: Math.floor(index / gridSize) + 1,
    col: (index % gridSize) + 1,
  };
}

export function moveGridIndex(
  index: number,
  direction: "up" | "down" | "left" | "right",
  gridSize = GRID_SIZE,
): number {
  const last = getLastGridIndex(gridSize);
  switch (direction) {
    case "up":
      return Math.max(index - gridSize, 0);
    case "down":
      return Math.min(index + gridSize, last);
    case "left":
      return Math.max(index - 1, 0);
    case "right":
      return Math.min(index + 1, last);
  }
}

export function isValidPaletteTile(tile: string): tile is TileName {
  return (PALETTE_TILES as readonly string[]).includes(tile);
}
