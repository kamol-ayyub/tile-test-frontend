"use client";

import { useEffect, useRef, useState } from "react";
import type { DragEvent, KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { TILE_ICONS } from "@/shared/components/tile-icons";
import { GRID_SIZE } from "@/shared/data";
import {
  clearGridCell,
  fillGridCell,
  selectActiveTile,
  selectGrid,
} from "../store";
import {
  getGridPosition,
  getLastGridIndex,
  isValidPaletteTile,
  moveGridIndex,
} from "../lib/grid";

export function DesignVisualizer() {
  const dispatch = useAppDispatch();
  const selectedTile = useAppSelector(selectActiveTile);
  const grid = useAppSelector(selectGrid);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const cellRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const hasInteracted = useRef(false);

  const focusCell = (index: number) => {
    cellRefs.current[index]?.focus();
  };

  useEffect(() => {
    if (hasInteracted.current) {
      focusCell(activeIndex);
    }
  }, [activeIndex]);

  const handleCellClick = (index: number) => {
    const currentTile = grid[index];
    if (selectedTile === null || selectedTile === currentTile) {
      dispatch(clearGridCell(index));
      return;
    }
    dispatch(fillGridCell({ index, tile: selectedTile }));
  };

  const handleDragOver = (event: DragEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (event: DragEvent<HTMLButtonElement>, index: number) => {
    event.preventDefault();
    setDragOverIndex(null);
    const dropped = event.dataTransfer.getData("text/plain");
    const currentTile = grid[index];
    if (!isValidPaletteTile(dropped)) {
      return;
    }
    if (dropped === currentTile) {
      dispatch(clearGridCell(index));
      return;
    }
    dispatch(fillGridCell({ index, tile: dropped }));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp":
      case "ArrowRight":
      case "ArrowLeft":
        event.preventDefault();
        setActiveIndex((index) =>
          moveGridIndex(
            index,
            event.key === "ArrowDown"
              ? "down"
              : event.key === "ArrowUp"
                ? "up"
                : event.key === "ArrowRight"
                  ? "right"
                  : "left",
          ),
        );
        break;
      case "Home":
        event.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        event.preventDefault();
        setActiveIndex(getLastGridIndex());
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        handleCellClick(activeIndex);
        break;
    }
  };

  return (
    <div className="flex min-w-0 flex-1 flex-col bg-cream max-md:flex-none">
      <div className="p-3 pb-2 text-center">
        <h2 className="font-display text-lg">VISUALIZE YOUR ORDER:</h2>
        <p className="mt-0.5 text-xs font-bold">
          DRAG AND DROP TILES HERE TO CREATE PATTERNS
        </p>
      </div>

      <div className="w-full flex-1 max-md:flex-none">
        <div
          role="grid"
          aria-label="Tile placement grid"
          aria-rowcount={GRID_SIZE}
          aria-colcount={GRID_SIZE}
          onKeyDown={handleKeyDown}
          className="grid w-full border-t border-navy/40"
          style={{
            gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
          }}
        >
          {grid.map((tileName, index) => {
            const { row, col } = getGridPosition(index);
            const Icon = tileName ? TILE_ICONS[tileName] : null;
            const isActive = index === activeIndex;
            const label = tileName
              ? `Row ${row}, column ${col}, ${tileName}`
              : `Row ${row}, column ${col}, empty`;
            const isDragTarget = dragOverIndex === index;
            return (
              <button
                key={index}
                type="button"
                role="gridcell"
                aria-rowindex={row}
                aria-colindex={col}
                aria-label={label}
                tabIndex={isActive ? 0 : -1}
                ref={(el) => {
                  cellRefs.current[index] = el;
                }}
                onClick={() => {
                  setActiveIndex(index);
                  handleCellClick(index);
                }}
                onDragOver={handleDragOver}
                onDragEnter={() => setDragOverIndex(index)}
                onDragLeave={(event) => {
                  if (
                    event.currentTarget.contains(event.relatedTarget as Node)
                  ) {
                    return;
                  }
                  setDragOverIndex(null);
                }}
                onDrop={(event) => handleDrop(event, index)}
                className={`aspect-square border-r border-b border-navy/40 bg-cream transition hover:bg-tan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy cursor-pointer ${
                  isActive ? "ring-2 ring-inset ring-navy/60" : ""
                } ${isDragTarget ? "bg-tan" : ""}`}
              >
                <AnimatePresence initial={false} mode="popLayout">
                  {Icon && (
                    <motion.span
                      key={tileName}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                      className="block size-full"
                    >
                      <Icon className="size-full" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
