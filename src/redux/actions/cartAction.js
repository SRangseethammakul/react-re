export const ADD_TO_CART = "ADD_TO_CART";
export const addToCart = (product = {}, cart = []) => {
  let exists = false;
  console.log(product)
  if (cart.length > 0) {
    cart.map((item) => {
      if (item.id === product.id) {
        exists = true;
        item.qty++;
      }
      return item;
    });
  }
  if (!exists) {
    cart.push(product);
  }
  const total = cart.reduce((totalQTY, product) => totalQTY + product.qty, 0);
  return {
      type : ADD_TO_CART,
      payload : {
          cart : cart,
          total : total
      }
  }
};
