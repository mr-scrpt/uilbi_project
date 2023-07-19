// const sortOrderSmacss = require('stylelint-config-property-sort-order-smacss/generate')
//
// module.exports = {
//   extends: ['stylelint-config-standard-scss'],
//   plugins: ['stylelint-order'],
//   rules: {
//     'order/properties-order': [
//       sortOrderSmacss({ emptyLineBefore: 'always', noEmptyLineBetween: true }),
//     ],
//   },
// }
module.exports = {
  extends: [
    'stylelint-config-clean-order',
    'stylelint-config-recommended-scss',
  ],
}
