
// Task 3
import { assets, getAssetById } from './asset.js';

// Transaction class definition
export class Transaction {
  constructor(assetId, type, quantity) {
    this.assetId = assetId;
    this.type = type;
    this.quantity = quantity;
  }

  // Method to execute the transaction
  execute() {
    const asset = getAssetById(this.assetId);
    
    if (!asset) {
      throw new Error("Asset not found");
    }

    if (this.type === 'buy') {
      // Increase quantity for buy transactions
      asset.quantity += this.quantity;
      console.log(`Bought ${this.quantity} of ${asset.name}. New quantity: ${asset.quantity}`);
    } else if (this.type === 'sell') {
      // Check if enough quantity is available for sell
      if (asset.quantity < this.quantity) {
        throw new Error(`Insufficient quantity for sale of ${asset.name}`);
      }
      asset.quantity -= this.quantity;
      console.log(`Sold ${this.quantity} of ${asset.name}. New quantity: ${asset.quantity}`);
    } else {
      throw new Error("Invalid transaction type. Use 'buy' or 'sell'.");
    }
  }
}
