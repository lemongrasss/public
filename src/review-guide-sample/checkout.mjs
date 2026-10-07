import {checkInventory} from './inventory.mjs';
import {calculateOrderTotal} from './order-total.mjs';
import {createReceipt} from './receipt.mjs';

export function checkout(cart, stock, options = {}) {
  checkInventory(cart, stock);
  const totals = calculateOrderTotal(cart, options);
  return {totals, receipt: createReceipt(cart, totals)};
}
