Test

The ten JavaScript modules in `src/review-guide-sample/` are connected sample
files for exercising pull request review guides, not a fix for issue #510.
They model a small shopping cart, with catalog lookup, inventory validation,
discounts, shipping, tax, and receipt formatting. They use native ES modules
and require no dependencies.

For example, from the repository root:

```sh
node --input-type=module -e "import {checkout} from './src/review-guide-sample/checkout.mjs'; console.log(checkout([{sku: 'tea', quantity: 2}], {tea: 10}).receipt)"
```
