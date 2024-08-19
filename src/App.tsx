import "./App.css";
import { useEffect, useReducer } from "react";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
//import { useCart } from "./hooks/useCart";
import { cartReducer, initialState } from "./reducers/cart-reducer";

function App() {
  // custom hook useCart
  /*const {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  } = useCart();*/
  // Reducer
  const [state, dispatch] = useReducer(cartReducer, initialState);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <>
      <Header cart={state.cart} dispatch={dispatch} />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {/*si existe data se mapea la data y se crea un componente Guitar por cada elemento de la data
            antes estaba de la siguiente manera
            {data.map((guitar) => (
            pero lo que ocurria es que recibia un error de que data podria ser undefined debido a que este recibe como type un array de objetos Guitar, por lo que se le coloca un ? para que si data es undefined no se ejecute el map
          */}
          {state.data.map((guitar) => (
            <Guitar
              //se utiliza key para que no haya problema con alun elemento repetido
              key={guitar.id}
              // objeto que contiene la información de una guitarra individual
              guitar={guitar}
              // // función que se utiliza para actualizar el estado cart. Este estado representa el carrito de compras en la aplicación.
              // ya no se utiliza debido a que se actualizo hacia un custom hook useCart
              // setCart={setCart}
              dispatch={dispatch}
            />
          ))}
        </div>
      </main>
      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
