import { db } from "../data/db";
import { CartItem, Guitar } from "../types";

// se puede ver las actions como funciones las cuales son las encargadas de dar vida a la app
export type CartAction =
  | {
      type: "add-to-cart"; // se define el tipo de acción add-to-cart
      payload: { items: Guitar }; // se define el payload de la acción add-to-cart que contiene un objeto de tipo Guitar
    }
  | {
      type: "remove-from-cart"; // se define el tipo de acción remove-from-cart
      payload: { items: Guitar["id"] }; // se define el payload de la acción remove-from-cart que contiene un objeto de tipo Guitar["id"]
    }
  | {
      type: "increase-quantity"; // se define el tipo de acción increase-quantity
      payload: { items: Guitar["id"] }; // se define el payload de la acción increase-quantity que contiene un objeto de tipo Guitar["id"]
    }
  | {
      type: "decrease-quantity";
      payload: { items: Guitar["id"] };
    }
  | {
      type: "clear-cart";
    };

// se define el estado inicial
// esto se podria tomar como los useState
export type CartState = {
  data: Guitar[]; // viene del useState de sata
  cart: CartItem[]; // viene de useState de cart que proviene del inictialState
};

const localStorageCart = (): CartItem[] => {
  const localStorageCart = localStorage.getItem("cart");
  return localStorageCart ? JSON.parse(localStorageCart) : [];
};

export const initialState: CartState = {
  data: db,
  // basado en que el carrito se guarda en el local storage
  cart: localStorageCart(),
};

export const cartReducer = (
  state: CartState = initialState,
  action: CartAction
) => {
  if (action.type === "add-to-cart") {
    return {
      ...state,
    };
  }
  if (action.type === "remove-from-cart") {
    return {
      ...state,
    };
  }
  if (action.type === "increase-quantity") {
    return {
      ...state,
    };
  }
  if (action.type === "decrease-quantity") {
    return {
      ...state,
    };
  }
  if (action.type === "clear-cart") {
    return {
      ...state,
    };
  }
  return state;
};
