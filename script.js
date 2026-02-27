// script.js

// Function to search within an array of items
function searchItems(items, searchTerm) {
    return items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

// Function to filter items by category
function filterByCategory(items, category) {
    return items.filter(item => item.category === category);
}

// Example usage:
const items = [
    { name: 'Sneaker A', category: 'Nike' },
    { name: 'Sneaker B', category: 'Adidas' },
    { name: 'Sneaker C', category: 'Puma' }
];

console.log(searchItems(items, 'A')); // Search for 'A'
console.log(filterByCategory(items, 'Nike')); // Filter by category 'Nike'