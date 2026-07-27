import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PALETTE_TILES } from "@/shared/data";
import type { TileName } from "@/shared/components/tile-icons";
import { getGridCellCount } from "./lib/grid";

const GRID_CELL_COUNT = getGridCellCount();

export const DEFAULT_TILE = PALETTE_TILES[0];

type VisualizerState = {
  selectedTile: TileName | null;
  grid: Array<TileName | null>;
};

const initialState: VisualizerState = {
  selectedTile: DEFAULT_TILE,
  grid: Array.from({ length: GRID_CELL_COUNT }, () => null),
};

const visualizerSlice = createSlice({
  name: "visualizer",
  initialState,
  reducers: {
    selectPaletteTile(state, action: PayloadAction<TileName | null>) {
      state.selectedTile = action.payload;
    },
    fillGridCell(
      state,
      action: PayloadAction<{ index: number; tile: TileName }>,
    ) {
      state.grid[action.payload.index] = action.payload.tile;
    },
    clearGridCell(state, action: PayloadAction<number>) {
      state.grid[action.payload] = null;
    },
    clearGrid(state) {
      state.grid = Array.from({ length: GRID_CELL_COUNT }, () => null);
    },
  },
});

export const {
  selectPaletteTile,
  fillGridCell,
  clearGridCell,
  clearGrid,
} = visualizerSlice.actions;
export const visualizerReducer = visualizerSlice.reducer;

type VisualizerRootState = { visualizer: VisualizerState };

export const selectActiveTile = (state: VisualizerRootState) =>
  state.visualizer.selectedTile;

export const selectGrid = (state: VisualizerRootState) =>
  state.visualizer.grid;
