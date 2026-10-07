import {findProduct} from './catalog.mjs';

export function addToCart(cart, sku, quantity = 1) {
  findProduct(sku);
  if (!Number.isSafeInteger(quantity) || quantity <= 0) {
    throw new RangeError('Quantity must be a positive safe integer');
  }

  const existing = cart.find(line => line.sku === sku);
  if (!existing) {
    return [...cart, {sku, quantity}];
  }

  const combinedQuantity = existing.quantity + quantity;
  if (!Number.isSafeInteger(combinedQuantity)) {
    throw new RangeError('Combined quantity exceeds the safe integer range');
  }
  return cart.map(line => line.sku === sku ? {...line, quantity: combinedQuantity} : {...line});
}
