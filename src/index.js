import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishlist = [];

console.log(`Welcome to your Shopee cart!`);

// Created 2 items
const item1 = await createItem('hotwheels ferrari', 20.99, 1);
const item2 = await createItem('hotwheels lamborghini', 39.99, 3);

// Added 2 items to cart
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);

// Deleted 2 items from cart
// await cartService.deleteItem(myCart, item1.name);
// await cartService.deleteItem(myCart, item2.name);

await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);