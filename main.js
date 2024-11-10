
// Task 4
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Initial portfolio value and allocation
console.log("Initial Portfolio Value:", calculatePortfolioValue());

console.log("Portfolio Allocation:");
getPortfolioAllocation().forEach(asset => {
  console.log(`${asset.name}: ${asset.allocationPercentage.toFixed(2)}%`);
});

// Transactions
try {
  const buyApple = new Transaction(1, 'buy', 5);
  buyApple.execute();

  const sellTesla = new Transaction(2, 'sell', 2);
  sellTesla.execute();

  const buyBond = new Transaction(3, 'buy', 1);
  buyBond.execute();

  const sellGold = new Transaction(4, 'sell', 1);
  sellGold.execute();
  
} catch (error) {
  console.error(error.message);
}

// Updated portfolio value and allocation after transactions
console.log("\nUpdated Portfolio Value:", calculatePortfolioValue());

console.log("Updated Portfolio Allocation:");
getPortfolioAllocation().forEach(asset => {
  console.log(`${asset.name}: ${asset.allocationPercentage.toFixed(2)}%`);
});
