'use client';

import { Provider } from 'react-redux';
import { MotionConfig } from 'framer-motion';
import { store } from './store';

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </Provider>
  );
}
