import { state } from "./model.js";
export function getQuantityFromCart(prodID) {
  // let state = JSON.parse(localStorage.getItem("state"));
  if (state["currentUser"]) {
    let userCart = state["currentUser"].cart;
    // for loop in array of objects
    for (let item of userCart) {
      if (item.id == prodID) {
        return item.quantity;
      }
    }
    return 0;
  } else {
    let guestCart = state.guestCart;
    // for loop in array of objects
    for (let item of guestCart) {
      if (item.id == prodID) {
        return item.quantity;
      }
    }
    return 0;
  }

}
