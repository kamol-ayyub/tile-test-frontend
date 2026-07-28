'use client';

import type { DragEvent } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { PALETTE_TILES } from '@/shared/data';
import { TILE_ICONS } from '@/shared/components/tile-icons';
import { selectActiveTile, selectPaletteTile } from '../store';

export function DesignPalette() {
  const dispatch = useAppDispatch();
  const selectedTile = useAppSelector(selectActiveTile);

  const handleTileClick = (tile: (typeof PALETTE_TILES)[number]) => {
    dispatch(selectPaletteTile(tile === selectedTile ? null : tile));
  };

  const handleDragStart = (
    event: DragEvent<HTMLButtonElement>,
    tile: (typeof PALETTE_TILES)[number],
  ) => {
    dispatch(selectPaletteTile(tile));
    event.dataTransfer.effectAllowed = 'copy';
    event.dataTransfer.setData('text/plain', tile);
    event.dataTransfer.setDragImage(event.currentTarget, 24, 24);
  };

  return (
    <aside className='w-41 shrink-0 border-l-2 border-navy bg-cream p-3 max-md:w-full max-md:border-l-0 max-md:border-t-2'>
      <h3 className='whitespace-nowrap rounded-md border-2 border-navy bg-cream px-2 py-0.5 text-center font-display text-[13px]'>
        DESIGN PALATE
      </h3>
      <div className='mt-2 grid grid-cols-2 gap-2 max-md:grid-cols-4'>
        {PALETTE_TILES.map((name) => {
          const Icon = TILE_ICONS[name];
          const isSelected = name === selectedTile;
          return (
            <motion.span
              key={name}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.1 }}
              className='block'
            >
              <button
                type='button'
                draggable
                aria-pressed={isSelected}
                aria-label={`${isSelected ? 'Deselect' : 'Select'} ${name} tile`}
                onClick={() => handleTileClick(name)}
                onDragStart={(event) => handleDragStart(event, name)}
                className={`block w-full cursor-grab overflow-hidden rounded-sm border-2 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy active:cursor-grabbing ${
                  isSelected
                    ? 'border-navy ring-2 ring-navy ring-offset-1'
                    : 'border-navy hover:brightness-90'
                }`}
              >
                <Icon className='block size-full' />
              </button>
            </motion.span>
          );
        })}
      </div>
    </aside>
  );
}
