export const changeToHigherDenomination = (amount: number): string =>
  (amount / 100).toFixed(2)
