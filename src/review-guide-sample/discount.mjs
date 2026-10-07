import {percentageOf} from './money.mjs';

export function calculateDiscount(subtotalCents, percentage = 0) {
  return percentageOf(subtotalCents, percentage);
}
