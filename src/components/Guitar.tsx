import { CartAction } from "../reducers/cart-reducer";
import type { Guitar } from "../types"; // se importa el tipo Guitar desde el archivo db.ts
// se crea un type GuitarProps que contiene la información de una guitarra individual y la función addToCart que se utiliza para actualizar el estado cart. Este estado representa el carrito de compras en la aplicación.
type GuitarProps = {
  guitar: Guitar;
  dispatch: React.Dispatch<CartAction>;
};
// se crea un componente funcional Guitar que recibe como props un objeto guitar y una función addToCart que se utiliza para actualizar el estado cart. y GuitarProps que es el tipo de las props que recibe el componente
export default function Guitar({ guitar, dispatch }: GuitarProps) {
  const { name, image, description, price } = guitar; // se desestructura el objeto guitar para obtener los valores de las propiedades mas limpiamente, en lugar de guitar.id, guitar.name, etc.

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center text-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`/img/${image}.jpg`}
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>
        <button
          onClick={() => {
            dispatch({ type: "add-to-cart", payload: { items: guitar } });
          }}
          type="button"
          className="btn btn-dark w-100"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
