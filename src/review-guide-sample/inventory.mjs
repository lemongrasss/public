import {findProduct} from './catalog.mjs';

export function checkInventory(cart, stock) {
  const requested = new Map();
  for (const {sku, quantity} of cart) {
    findProduct(sku);
    if (!Number.isSafeInteger(quantity) || quantity <= 0) {
      throw new RangeError('Quantity must be a positive safe integer');
    }
    const combinedQuantity = (requested.get(sku) ?? 0) + quantity;
    if (!Number.isSafeInteger(combinedQuantity)) {
      throw new RangeError('Combined quantity exceeds the safe integer range');
    }
    requested.set(sku, combinedQuantity);
  }

  for (const [sku, quantity] of requested) {
    const available = stock[sku];
    if (!Number.isSafeInteger(available) || available < 0) {
      throw new RangeError(`Missing or invalid stock for ${sku}`);
    }
    if (quantity > available) {
      throw new Error(`Insufficient stock for ${sku}`);
    }
  }
}
