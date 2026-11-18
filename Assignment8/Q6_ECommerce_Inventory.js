// Q6. E-Commerce Inventory System (filter + sort + reduce)

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 4 },
    { id: 2, name: "Phone", category: "Electronics", price: 20000, stock: 12 },
    { id: 3, name: "T-Shirt", category: "Clothing", price: 800, stock: 3 },
    { id: 4, name: "Jeans", category: "Clothing", price: 1500, stock: 8 },
    { id: 5, name: "Chair", category: "Furniture", price: 2500, stock: 2 },
    { id: 6, name: "Table", category: "Furniture", price: 5000, stock: 6 }
];

function getLowStockProducts(productList, threshold = 5) {
    return productList.filter(product => product.stock < threshold);
}

function sortProductsByPrice(productList) {
    // Copy first so the original array is not changed.
    return [...productList].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(productList) {
    return productList.reduce(
        (total, product) => total + product.price * product.stock,
        0
    );
}

function groupByCategory(productList) {
    return productList.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }
        groups[product.category].push(product);
        return groups;
    }, {});
}

console.log("Low stock products:", getLowStockProducts(products));
console.log("Products sorted by price:", sortProductsByPrice(products));
console.log("Total inventory value: Rs." + calculateTotalInventoryValue(products));
console.log("Products grouped by category:", groupByCategory(products));
