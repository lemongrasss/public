import {findProduct} from './catalog.mjs';
import {formatMoney} from './money.mjs';

export function createReceipt(cart, totals) {
  const lines = cart.map(({sku, quantity}) => {
    const product = findProduct(sku);
    return `${quantity} x ${product.name}: ${formatMoney(product.priceCents * quantity)}`;
  });

  return [
    ...lines,
    `Subtotal: ${formatMoney(totals.subtotalCents)}`,
    `Discount: -${formatMoney(totals.discountCents)}`,
    `Shipping: ${formatMoney(totals.shippingCents)}`,
    `Tax: ${formatMoney(totals.taxCents)}`,
    `Total: ${formatMoney(totals.totalCents)}`,
  ].join('\n');
}
