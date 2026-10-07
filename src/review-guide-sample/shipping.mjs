import {validateCents} from './money.mjs';

export function calculateShipping(subtotalCents) {
  validateCents(subtotalCents);
  return subtotalCents === 0 || subtotalCents >= 5000 ? 0 : 499;
}
