// {
//   let username: string;
//   username = "gvdjhmbcjemd";
//     username = 1234; // Error;
//     username.
// }

// {
//   let username: string = "Mary2003";
//   username = false; // Error;
// }

// {
//   const age: number = 25;
// }

// {
//   let isOnline = false;
//   isOnline = "Hello"; //Error;
// }

// // OBJECTS

// interface Student {
//     readonly name: string;
//     age: number;
//     course: string;
//     mark: number;
//     group: string;
//     isOnline: boolean;
//     promocode?: string;
// }

// interface UpperStudent extends Student {
//     role: string;
// }

// const student1: Student = {
//     name: "Vitalii",
//     age: 25,
//     course: "Batchelor",
//     mark: 78.58,
//     group: "8123",
//     isOnline: false,
//     promocode: "REACT2026",
// }

// const student2: Student = {
//     name: "Mary",
//     age: 22,
//     course: "Batchelor",
//     mark: 88.58,
//     group: "8289",
//     isOnline: true,
// }

// const student3: UpperStudent = {
//     name: "Mary",
//     age: 22,
//     course: "Batchelor",
//     mark: 88.58,
//     group: "8289",
//     isOnline: true,
//     role: "master",

// }

// student1.name.toUpperCase();
// student1.mark.toFixed();
// student1.unknown; // Error

// student1.name = "Mark"; // Error;
// console.log(student1.name);

// student1.isOnline = true;
// student2.age = 30;

// student2.promocode.toUpperCase();
// student2.promocode?.length;

// if (typeof student1.promocode !== "undefined") {
//     student1.promocode.toUpperCase();
// }

// // ARRAYS

// const products: string[] = ["apple", "banana", "orange"];
// products.push(10); // Error;
// products.push("lemon");

// products.forEach(product => product.toUpperCase());
// const array: number[] = products.map(product => product.length);

// {
//     interface Product {
//         title: string;
//         price: number;
//         isFavorite: boolean;
//     }

//     const products: Product[] = [
//         {
//             title: "Apple",
//             price: 10,
//             isFavorite: true
//         },

//         {
//             title: "Banana",
//             price: 20,
//             isFavorite: false,
//         },
//     ];

//     const matrix: number[][] = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ];

//     const matrix2: Array<Array<number>> = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//     ];
// }
