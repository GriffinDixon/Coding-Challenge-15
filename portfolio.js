
// Task 2
import { assets } from './asset.js';

// Function to calculate the total value of the portfolio
export function calculatePortfolioValue() {
  return assets.reduce((totalValue, asset) => totalValue + (asset.price * asset.quantity), 0);
}

// Function to calculate the percentage allocation of each asset in the portfolio
export function getPortfolioAllocation() {
  const totalValue = calculatePortfolioValue();
  return assets.map(asset => ({
    name: asset.name,
    allocationPercentage: ((asset.price * asset.quantity) / totalValue) * 100
  }));
}
