export function validateCents(cents) {
  if (!Number.isSafeInteger(cents) || cents < 0) {
    throw new RangeError('Money must be a non-negative safe integer in cents');
  }
  return cents;
}

export function formatMoney(cents) {
  validateCents(cents);
  return `$${(cents / 100).toFixed(2)}`;
}

export function percentageOf(cents, percentage) {
  validateCents(cents);
  if (!Number.isFinite(percentage) || percentage < 0 || percentage > 100) {
    throw new RangeError('Percentage must be between 0 and 100');
  }
  return validateCents(Math.round((cents / 100) * percentage));
}
