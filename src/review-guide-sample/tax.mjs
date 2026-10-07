import {percentageOf} from './money.mjs';

export function calculateTax(taxableCents, rate = 8) {
  return percentageOf(taxableCents, rate);
}
