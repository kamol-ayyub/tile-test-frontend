import { describe, it, expect } from "vitest";
import {
  calculateShipping,
  FREE_SHIPPING_THRESHOLD,
  getCartLines,
  getCartSummary,
  getAvailableTiles,
  SHIPPING_FLAT_RATE,
  shouldRemoveOnDecrease,
} from "./cart-calculations";
import { TILE_CATALOG } from "@/shared/data";

describe("cart calculations", () => {
  describe("getCartLines", () => {
    it("returns an empty array when the cart is empty", () => {
      expect(getCartLines([])).toEqual([]);
    });

    it("builds a line for each known tile with the correct line total", () => {
      const items = [
        { id: "ocean-wave", quantity: 100 },
        { id: "forest-fern", quantity: 50 },
      ];

      expect(getCartLines(items)).toEqual([
        { ...TILE_CATALOG[0], quantity: 100, lineTotal: 180 },
        { ...TILE_CATALOG[1], quantity: 50, lineTotal: 100 },
      ]);
    });

    it("skips unknown tile ids", () => {
      const items = [
        { id: "not-a-tile", quantity: 25 },
        { id: "yellow-star", quantity: 100 },
      ];

      expect(getCartLines(items)).toEqual([
        { ...TILE_CATALOG[3], quantity: 100, lineTotal: 190 },
      ]);
    });
  });

  describe("calculateShipping", () => {
    it("is free when the subtotal is zero", () => {
      expect(calculateShipping(0)).toBe(0);
    });

    it("charges the flat rate when the subtotal is below the free-shipping threshold", () => {
      expect(calculateShipping(100)).toBe(SHIPPING_FLAT_RATE);
      expect(calculateShipping(FREE_SHIPPING_THRESHOLD - 1)).toBe(
        SHIPPING_FLAT_RATE,
      );
    });

    it("charges the flat rate when the subtotal equals the threshold", () => {
      expect(calculateShipping(FREE_SHIPPING_THRESHOLD)).toBe(
        SHIPPING_FLAT_RATE,
      );
    });

    it("is free when the subtotal is above the threshold", () => {
      expect(calculateShipping(FREE_SHIPPING_THRESHOLD + 1)).toBe(0);
    });
  });

  describe("getCartSummary", () => {
    it("returns zeros for an empty cart", () => {
      expect(getCartSummary([])).toEqual({
        lines: [],
        subtotal: 0,
        shipping: 0,
        grandTotal: 0,
      });
    });

    it("adds flat-rate shipping for orders below the free-shipping threshold", () => {
      const items = [{ id: "cross-plus", quantity: 25 }]; // $1.50 * 25 = $37.50

      expect(getCartSummary(items)).toEqual({
        lines: [{ ...TILE_CATALOG[6], quantity: 25, lineTotal: 37.5 }],
        subtotal: 37.5,
        shipping: SHIPPING_FLAT_RATE,
        grandTotal: 37.5 + SHIPPING_FLAT_RATE,
      });
    });

    it("waives shipping only when the subtotal is strictly above the threshold", () => {
      const quantity = Math.ceil(FREE_SHIPPING_THRESHOLD / 2.4) + 1; // blue-geometric at $2.40
      const items = [{ id: "blue-geometric", quantity }];
      const summary = getCartSummary(items);

      expect(summary.subtotal).toBeGreaterThan(FREE_SHIPPING_THRESHOLD);
      expect(summary.shipping).toBe(0);
      expect(summary.grandTotal).toBe(summary.subtotal);
    });

    it("aggregates multiple cart lines", () => {
      const items = [
        { id: "ocean-wave", quantity: 100 }, // 1.8 * 100 = 180
        { id: "terracotta-dot", quantity: 200 }, // 1.6 * 200 = 320
      ];
      const summary = getCartSummary(items);

      expect(summary.subtotal).toBe(500);
      expect(summary.shipping).toBe(SHIPPING_FLAT_RATE);
      expect(summary.grandTotal).toBe(500 + SHIPPING_FLAT_RATE);
      expect(summary.lines).toHaveLength(2);
    });
  });

  describe("getAvailableTiles", () => {
    it("returns all tiles when the cart is empty", () => {
      expect(getAvailableTiles([])).toEqual(TILE_CATALOG);
    });

    it("excludes tiles that are already in the cart", () => {
      const items = [{ id: "ocean-wave", quantity: 25 }];
      const available = getAvailableTiles(items);

      expect(available).toHaveLength(TILE_CATALOG.length - 1);
      expect(available.some((tile) => tile.id === "ocean-wave")).toBe(false);
    });

    it("returns no tiles when every catalog tile is in the cart", () => {
      const items = TILE_CATALOG.map((tile) => ({
        id: tile.id,
        quantity: 25,
      }));

      expect(getAvailableTiles(items)).toEqual([]);
    });
  });

  describe("shouldRemoveOnDecrease", () => {
    it("returns true when quantity equals the step", () => {
      expect(shouldRemoveOnDecrease(25, 25)).toBe(true);
    });

    it("returns true when quantity is below the step", () => {
      expect(shouldRemoveOnDecrease(20, 25)).toBe(true);
    });

    it("returns false when quantity is above the step", () => {
      expect(shouldRemoveOnDecrease(50, 25)).toBe(false);
    });
  });
});
