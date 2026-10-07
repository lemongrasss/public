export const catalog = Object.freeze([
  Object.freeze({sku: 'tea', name: 'Green tea', priceCents: 850}),
  Object.freeze({sku: 'mug', name: 'Ceramic mug', priceCents: 1400}),
  Object.freeze({sku: 'honey', name: 'Wildflower honey', priceCents: 650}),
]);

export function findProduct(sku) {
  const product = catalog.find(item => item.sku === sku);
  if (!product) {
    throw new Error(`Unknown product: ${sku}`);
  }
  return product;
}
