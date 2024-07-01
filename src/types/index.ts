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
