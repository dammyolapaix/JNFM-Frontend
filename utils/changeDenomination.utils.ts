export const changeToHigherDenomination = (amount: number): string =>
  new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'GHS',
  }).format(amount / 100)
