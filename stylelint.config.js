const sortOrderSmacss = require('stylelint-config-property-sort-order-smacss/generate')

module.exports = {
  extends: ['stylelint-config-property-sort-order-smacss'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-order': [
      sortOrderSmacss({ emptyLineBefore: 'always', noEmptyLineBetween: true }),
    ],
  },
}
