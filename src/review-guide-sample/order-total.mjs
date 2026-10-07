import {findProduct} from './catalog.mjs';
import {calculateDiscount} from './discount.mjs';
import {validateCents} from './money.mjs';
import {calculateShipping} from './shipping.mjs';
import {calculateTax} from './tax.mjs';

export function calculateOrderTotal(cart, {discountPercentage = 0, taxRate = 8} = {}) {
  const subtotalCents = cart.reduce((subtotal, {sku, quantity}) => {
    if (!Number.isSafeInteger(quantity) || quantity <= 0) {
      throw new RangeError('Quantity must be a positive safe integer');
    }
    const lineTotal = validateCents(findProduct(sku).priceCents * quantity);
    return validateCents(subtotal + lineTotal);
  }, 0);
  const discountCents = calculateDiscount(subtotalCents, discountPercentage);
  const discountedSubtotal = subtotalCents - discountCents;
  const shippingCents = calculateShipping(discountedSubtotal);
  const taxCents = calculateTax(discountedSubtotal, taxRate);
  const totalCents = validateCents(discountedSubtotal + shippingCents + taxCents);

  return {subtotalCents, discountCents, shippingCents, taxCents, totalCents};
}
