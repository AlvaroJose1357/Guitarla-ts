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
      payload: { id: Guitar["id"] }; // se define el payload de la acción remove-from-cart que contiene un objeto de tipo Guitar["id"]
    }
  | {
      type: "increase-quantity"; // se define el tipo de acción increase-quantity
      payload: { id: Guitar["id"] }; // se define el payload de la acción increase-quantity que contiene un objeto de tipo Guitar["id"]
    }
  | {
      type: "decrease-quantity";
      payload: { id: Guitar["id"] };
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
const MAX_QUANTITY = 5;
const MIN_QUANTITY = 1;
export const cartReducer = (
  state: CartState = initialState,
  action: CartAction
) => {
  if (action.type === "add-to-cart") {
    const itemsExist = state.cart.find(
      (guitar) => guitar.id === action.payload.items.id
    );
    let updateCart: CartItem[] = [];
    if (itemsExist) {
      updateCart = state.cart.map((item) => {
        if (item.id === action.payload.items.id) {
          if (item.quantity < MAX_QUANTITY) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        } else {
          return item;
        }
      });
    } else {
      const newItem: CartItem = { ...action.payload.items, quantity: 1 };
      updateCart = [...state.cart, newItem];
    }
    return {
      ...state,
      cart: updateCart,
    };
  }
  if (action.type === "remove-from-cart") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }
  if (action.type === "increase-quantity") {
    const updateCart = state.cart.map((item) => {
      if (item.id === action.payload.id && item.quantity < MAX_QUANTITY) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    return {
      ...state,
      cart: updateCart,
    };
  }
  if (action.type === "decrease-quantity") {
    const updateCart = state.cart.map((item) => {
      if (item.id === action.payload.id && item.quantity > MIN_QUANTITY) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    return {
      ...state,
      cart: updateCart,
    };
  }
  if (action.type === "clear-cart") {
    return {
      ...state,
      cart: [],
    };
  }
  return state;
};
