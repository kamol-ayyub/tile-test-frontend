# Framer Motion Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Install framer-motion, enable reduced-motion support, and add subtle functional micro-animations to the existing tile order-form UI.

**Architecture:** A single `MotionConfig` provider wraps the app. Motion components (`motion.div`, `motion.tr`, `motion.button`, etc.) and `AnimatePresence` are added directly to existing feature components, keeping changes minimal and co-located with the UI they animate.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, Redux Toolkit, framer-motion v12.

## Global Constraints

- Use named exports only.
- Keep kebab-case file names.
- Follow the existing feature-based folder structure.
- All motion code must respect `prefers-reduced-motion` via `MotionConfig reducedMotion="user"`.
- Use short durations (150–250ms) and small distances; no decorative page-entrance motion.
- Do not modify unrelated code or tests.
- AGENTS.MD: after UI changes, run the `impeccable` skill for a polish pass.

---

## Task 1: Install framer-motion

**Files:**
- Modify: `package.json`
- Modify: `pnpm-lock.yaml` (via pnpm)

**Interfaces:**
- Produces: `framer-motion` dependency available to the project.

- [ ] **Step 1: Add the dependency**

```bash
pnpm add framer-motion
```

- [ ] **Step 2: Verify it installed**

```bash
pnpm list framer-motion
```

Expected output: `framer-motion <version>` where version is v12.x.

---

## Task 2: Add global MotionConfig provider

**Files:**
- Modify: `app/providers.tsx`

**Interfaces:**
- Consumes: `framer-motion`.
- Produces: `Providers` wraps app in `MotionConfig` with `reducedMotion="user"`.

- [ ] **Step 1: Import `MotionConfig` and wrap children**

```tsx
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
```

- [ ] **Step 2: Run the dev server briefly and confirm no runtime error**

```bash
pnpm build
```

Expected: build completes without errors.

---

## Task 3: Animate cart badge in NavBar

**Files:**
- Modify: `shared/layout/components/nav-bar.tsx`

**Interfaces:**
- Consumes: `framer-motion`.

- [ ] **Step 1: Import `motion` and `AnimatePresence`**

```tsx
import { AnimatePresence, motion } from 'framer-motion';
```

- [ ] **Step 2: Replace the badge `<span>` with `motion.span` keyed on count**

```tsx
<AnimatePresence mode="popLayout">
  {itemCount > 0 && (
    <motion.span
      key={itemCount}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      aria-hidden="true"
      className="absolute -right-1.5 -top-1.5 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-terracotta-dark px-0.5 text-[9px] font-bold text-cream"
    >
      {itemCount}
    </motion.span>
  )}
</AnimatePresence>
```

- [ ] **Step 3: Build check**

```bash
pnpm build
```

---

## Task 4: Animate cart table row add/remove

**Files:**
- Modify: `features/cart/components/cart-table.tsx`

**Interfaces:**
- Consumes: `framer-motion`.

- [ ] **Step 1: Import `motion` and `AnimatePresence`**

```tsx
import { AnimatePresence, motion } from 'framer-motion';
```

- [ ] **Step 2: Wrap row render in `AnimatePresence` and make each row a `motion.tr`**

Inside the `<tbody>`, wrap `{lines.map(...)}` like this:

```tsx
<AnimatePresence initial={false}>
  {lines.map((item) => {
    const Icon = TILE_ICONS[item.icon];
    return (
      <motion.tr
        key={item.id}
        layout
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        {/* existing row cells unchanged */}
      </motion.tr>
    );
  })}
</AnimatePresence>
```

- [ ] **Step 3: Build check**

```bash
pnpm build
```

---

## Task 5: Animate AddTilePicker dropdown

**Files:**
- Modify: `features/cart/components/add-tile-picker.tsx`

**Interfaces:**
- Consumes: `framer-motion`.

- [ ] **Step 1: Import `motion` and `AnimatePresence`**

```tsx
import { AnimatePresence, motion } from 'framer-motion';
```

- [ ] **Step 2: Replace conditional `<ul>` with `motion.ul` inside `AnimatePresence`**

```tsx
<AnimatePresence>
  {isOpen && (
    <motion.ul
      ref={listboxRef}
      id={listboxId}
      role="listbox"
      aria-label="Tiles available to add"
      tabIndex={-1}
      aria-activedescendant={
        availableTiles.length > 0 ? optionId(activeIndex) : undefined
      }
      onKeyDown={handleListboxKeyDown}
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="absolute left-0 top-full z-20 mt-1 max-h-72 w-60 overflow-y-auto border-2 border-navy bg-cream py-1 shadow-[4px_4px_0_0_var(--color-navy)] focus:outline-none"
    >
      {/* existing listbox contents unchanged */}
    </motion.ul>
  )}
</AnimatePresence>
```

- [ ] **Step 3: Build check**

```bash
pnpm build
```

---

## Task 6: Animate tile pop-in on design grid

**Files:**
- Modify: `features/visualizer/components/design-visualizer.tsx`

**Interfaces:**
- Consumes: `framer-motion`.

- [ ] **Step 1: Import `motion` and `AnimatePresence`**

```tsx
import { AnimatePresence, motion } from 'framer-motion';
```

- [ ] **Step 2: Wrap the icon inside the grid cell with `AnimatePresence` and `motion.span`**

```tsx
<AnimatePresence initial={false} mode="popLayout">
  {Icon && (
    <motion.span
      key={tileName}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="block size-full"
    >
      <Icon className="size-full" />
    </motion.span>
  )}
</AnimatePresence>
```

- [ ] **Step 3: Build check**

```bash
pnpm build
```

---

## Task 7: Add tap feedback to palette swatches

**Files:**
- Modify: `features/visualizer/components/design-palette.tsx`

**Interfaces:**
- Consumes: `framer-motion`.

- [ ] **Step 1: Import `motion`**

```tsx
import { motion } from 'framer-motion';
```

- [ ] **Step 2: Replace the `<button>` map element with `motion.button`**

```tsx
<motion.button
  key={name}
  type="button"
  draggable
  aria-pressed={isSelected}
  aria-label={`${isSelected ? 'Deselect' : 'Select'} ${name} tile`}
  onClick={() => handleTileClick(name)}
  onDragStart={(event) => handleDragStart(event, name)}
  whileTap={{ scale: 0.94 }}
  transition={{ duration: 0.1 }}
  className={`block cursor-grab overflow-hidden rounded-sm border-2 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy active:cursor-grabbing ${
    isSelected
      ? 'border-navy ring-2 ring-navy ring-offset-1'
      : 'border-navy hover:brightness-90'
  }`}
>
  <Icon className="block size-full" />
</motion.button>
```

- [ ] **Step 3: Build check**

```bash
pnpm build
```

---

## Task 8: Animate payment-method radio dot and validation errors

**Files:**
- Modify: `features/checkout/components/checkout-ui.tsx`

**Interfaces:**
- Consumes: `framer-motion`.

- [ ] **Step 1: Import `motion` and `AnimatePresence`**

```tsx
import { AnimatePresence, motion } from 'framer-motion';
```

- [ ] **Step 2: Replace radio inner dot with a motion scale-in span in both components**

For `PaymentMethodRadioButton`:

```tsx
<motion.span
  className="hidden size-1.5 rounded-full bg-navy group-has-checked:block"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ type: 'spring', stiffness: 500, damping: 25 }}
/>
```

For `PaymentMethodCard`:

```tsx
<motion.span
  className="absolute left-2 top-2 flex size-3.5 shrink-0 items-center justify-center rounded-full border-2 border-navy peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-navy"
>
  <motion.span
    className="size-1.5 rounded-full bg-navy"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: 'spring', stiffness: 500, damping: 25 }}
  />
</motion.span>
```

For the card, the checked state is handled by `group-has-checked` on the inner dot; keep the visible/hidden behavior. The exact motion mark-up is:

```tsx
<span className="absolute left-2 top-2 flex size-3.5 shrink-0 items-center justify-center rounded-full border-2 border-navy peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-navy">
  <motion.span
    className="hidden size-1.5 rounded-full bg-navy group-has-checked:block"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: 'spring', stiffness: 500, damping: 25 }}
  />
</span>
```

- [ ] **Step 3: Wrap `CustomerInputField` error text with `AnimatePresence` and `motion.p`**

```tsx
{error && (
  <AnimatePresence>
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.15 }}
      className="text-[9px] font-bold text-terracotta-dark"
    >
      {error}
    </motion.p>
  </AnimatePresence>
)}
```

- [ ] **Step 4: Build check**

```bash
pnpm build
```

---

## Task 9: Add tap feedback to PlaceOrderButton

**Files:**
- Modify: `features/checkout/components/place-order-button.tsx`

**Interfaces:**
- Consumes: `framer-motion`.

- [ ] **Step 1: Add `'use client'` and import `motion`**

```tsx
'use client';

import { motion } from 'framer-motion';
```

- [ ] **Step 2: Convert the `<button>` to `motion.button` with `whileTap`**

```tsx
export function PlaceOrderButton() {
  return (
    <motion.button
      type="submit"
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.1 }}
      className="w-full cursor-pointer rounded-md bg-navy py-2 font-display text-xs tracking-widest text-cream transition-colors hover:bg-terracotta-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy md:mt-2.5 max-md:order-6"
    >
      PLACE SECURE ORDER
    </motion.button>
  );
}
```

- [ ] **Step 3: Build check**

```bash
pnpm build
```

---

## Task 10: Animate checkout success card entrance

**Files:**
- Modify: `features/checkout/components/checkout-form.tsx`

**Interfaces:**
- Consumes: `framer-motion`.

- [ ] **Step 1: Import `motion` and `AnimatePresence`**

```tsx
import { AnimatePresence, motion } from 'framer-motion';
```

- [ ] **Step 2: Wrap the success card with `AnimatePresence` and `motion.div`**

```tsx
if (isSuccess) {
  return (
    <div className="w-[320px] shrink-0 md:max-xl:w-full md:max-xl:max-w-150 md:max-xl:order-3 max-md:contents">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="rounded-sm border-2 border-navy bg-cream p-4 text-center"
        >
          <h2 className="font-display text-lg">ORDER PLACED</h2>
          <p className="mt-2 text-[10px] font-bold">
            THANK YOU FOR YOUR ORDER. WE WILL CONTACT YOU SHORTLY.
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
```

- [ ] **Step 3: Build check**

```bash
pnpm build
```

---

## Task 11: Verify and polish

**Files:**
- All modified files above.

**Interfaces:**
- Consumes: all previous tasks.

- [ ] **Step 1: Run lint**

```bash
pnpm lint
```

Expected: no lint errors.

- [ ] **Step 2: Run tests**

```bash
pnpm test
```

Expected: all tests pass.

- [ ] **Step 3: Run production build**

```bash
pnpm build
```

Expected: build succeeds.

- [ ] **Step 4: Run the `impeccable` skill on all changed UI files**

Pass the list of modified files to the skill for a polish pass.

---

## Spec coverage

- Install framer-motion: Task 1.
- Reduced-motion support: Task 2 (MotionConfig).
- NavBar badge: Task 3.
- Cart rows add/remove: Task 4.
- AddTilePicker dropdown: Task 5.
- DesignVisualizer tile pop-in: Task 6.
- DesignPalette tap feedback: Task 7.
- Payment-method radio dot + errors: Task 8.
- PlaceOrderButton tap feedback: Task 9.
- Checkout success entrance: Task 10.
- Verify/polish: Task 11.
