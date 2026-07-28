'use client';

import { motion } from 'framer-motion';

export function PlaceOrderButton() {
  return (
    <motion.button
      type='submit'
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.1 }}
      className='w-full cursor-pointer rounded-md bg-navy py-2 font-display text-xs tracking-widest text-cream transition-colors hover:bg-terracotta-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy md:mt-2.5 max-md:order-6'
    >
      PLACE SECURE ORDER
    </motion.button>
  );
}
