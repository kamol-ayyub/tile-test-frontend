'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { PlusIcon } from '@/shared/components/brand-icons';
import { TILE_ICONS } from '@/shared/components/tile-icons';
import { getAvailableTiles } from '@/features/cart';
import type { KeyboardEvent } from 'react';
import { useEffect, useId, useRef, useState } from 'react';
import { addTile, selectCartItems } from '../store';

export function AddTilePicker() {
  const dispatch = useAppDispatch();
  const selectedCartItems = useAppSelector(selectCartItems);
  const availableTiles = getAvailableTiles(selectedCartItems);

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const listboxId = useId();

  const openPicker = () => {
    setActiveIndex(0);
    setIsOpen(true);
  };

  const closePicker = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const selectTile = (tileId: string) => {
    dispatch(addTile(tileId));
    closePicker();
  };

  const optionId = (index: number) => `${listboxId}-option-${index}`;

  // Close on outside pointer interaction while the picker is open
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handlePointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        event.target instanceof Node &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      listboxRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    document
      .getElementById(`${listboxId}-option-${activeIndex}`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [isOpen, activeIndex, listboxId]);

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' && !isOpen) {
      event.preventDefault();
      openPicker();
    }
  };

  const handleListboxKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const lastIndex = availableTiles.length - 1;
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setActiveIndex((index) => Math.min(index + 1, lastIndex));
        break;
      case 'ArrowUp':
        event.preventDefault();
        setActiveIndex((index) => Math.max(index - 1, 0));
        break;
      case 'Home':
        event.preventDefault();
        setActiveIndex(0);
        break;
      case 'End':
        event.preventDefault();
        setActiveIndex(lastIndex);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (availableTiles[activeIndex]) {
          selectTile(availableTiles[activeIndex].id);
        }
        break;
      case 'Escape':
        event.preventDefault();
        closePicker();
        break;
      case 'Tab':
        setIsOpen(false);
        break;
    }
  };

  return (
    <div ref={containerRef} className='relative'>
      <button
        ref={triggerRef}
        type='button'
        onClick={() => (isOpen ? setIsOpen(false) : openPicker())}
        onKeyDown={handleTriggerKeyDown}
        aria-haspopup='listbox'
        aria-expanded={isOpen}
        aria-controls={listboxId}
        className='flex bg-cream cursor-pointer selectedCartItems-center gap-1.5 rounded-sm border border-navy px-2 py-1 transition-colors hover:bg-tan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy'
      >
        <PlusIcon className='size-3.5 shrink-0 text-terracotta' />
        <span className='text-left text-[9px] font-bold leading-tight'>
          ADD NEW TILE TO CART
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            ref={listboxRef}
            id={listboxId}
            role='listbox'
            aria-label='Tiles available to add'
            tabIndex={-1}
            aria-activedescendant={
              availableTiles.length > 0 ? optionId(activeIndex) : undefined
            }
            onKeyDown={handleListboxKeyDown}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className='absolute left-0 top-full z-20 mt-1 max-h-72 w-60 overflow-y-auto border-2 border-navy bg-cream py-1 shadow-[4px_4px_0_0_var(--color-navy)] focus:outline-none'
          >
            {availableTiles.length === 0 && (
              <li
                role='option'
                aria-disabled='true'
                aria-selected={false}
                className='px-3 py-2 text-[10px] font-bold'
              >
                ALL TILES ARE ALREADY IN YOUR CART
              </li>
            )}
            {availableTiles.map((tile, index) => {
              const Icon = TILE_ICONS[tile.icon];
              const isActive = index === activeIndex;
              return (
                <li key={tile.id} role='presentation'>
                  <button
                    type='button'
                    role='option'
                    id={optionId(index)}
                    aria-selected={isActive}
                    tabIndex={-1}
                    onClick={() => selectTile(tile.id)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`flex w-full cursor-pointer selectedCartItems-center gap-2 px-2 py-1.5 text-left ${
                      isActive ? 'bg-tan' : ''
                    }`}
                  >
                    <Icon className='size-8 shrink-0 rounded-sm border border-navy' />
                    <span className='text-[10px] font-bold leading-tight'>
                      {tile.name}
                    </span>
                    <span className='ml-auto text-[10px] font-bold tabular-nums'>
                      ${tile.unitPrice.toFixed(2)}
                    </span>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
