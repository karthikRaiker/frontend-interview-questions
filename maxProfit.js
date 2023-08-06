const maxProfit = (price) => {
  let minStockPurchase = price[0] || 0;
  let profit = 0;
  for (let i = 0; i < price.length; i++) {
    if (price[i] < minStockPurchase) {
      minStockPurchase = price[i];
    }
    profit = Math.max(profit, price[i] - minStockPurchase);
  }
  return profit;
};
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7, 6, 1, 2, 3, 9]));
