// Items use case

// -> create item subtotal correctly
function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal() {
      return this.price * this.quantity
    }
  };
}

export default createItem;