// se creo un type Guitar para definir la estructura de los objetos que se encuentran en la base de datos
export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}
// aqui con interface
// interface Guitar {
//   id: number;
//   name: string;
//   image: string;
//   description: string;
//   price: number;
// }
// se utiliza un types cuando se necesita definir un tipo de dato personalizado, en este caso se define un tipo de dato Guitar que contiene la estructura de los objetos que se encuentran en la base de datos
//mientras que interface se utiliza cuando se necesita definir una estructura de un objeto, en este caso se define una interfaz Guitar que contiene la estructura de los objetos que se encuentran en la base de datos

export type CartItem = Guitar & { 
  quantity: number 
};
// se crea un type CartItem que extiende del tipo Guitar y agrega una propiedad quantity de tipo number
// aqui con interface
// export interface CartItem extends Guitar {
//   quantity: number;
// }
// y con utility types se puede hacer de las siguientes maneras 
// con Omit -> se omite la propiedad id del tipo Guitar y se agrega la propiedad quantity de tipo number
// export type CartItem = Omit<Guitar, "id"> & {
//  quantity: number 
// };
// con Pick -> se seleccionan las propiedades name, image, description, price del tipo Guitar y se agrega la propiedad quantity de tipo number
// export type CartItem = Pick<Guitar, "name" | "image" | "description" | "price"> & {
//  quantity: number 
//};