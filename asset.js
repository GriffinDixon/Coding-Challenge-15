
// Task 1
export const assets = [
    { id: 1, name: "Apple Stock", type: "stock", price: 69, quantity: 10 },
    { id: 2, name: "Tesla Stock", type: "stock", price: 300, quantity: 5 },
    { id: 3, name: "US Treasury Bond", type: "bond", price: 1000, quantity: 3 },
    { id: 4, name: "Gold", type: "commodity", price: 1800, quantity: 2 }
  ];
  
  // Function to get asset details by id
  export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
  }
  