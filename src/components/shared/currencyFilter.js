export default function (amount) {
  const amountToFixed = parseFloat(amount).toFixed(2);
  if (!amount) {
    return '';
  }
  return `${amountToFixed} €`;
}
