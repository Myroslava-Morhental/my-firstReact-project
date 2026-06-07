// function sum(a: number, b: number): number {
//   return a + b;
//   // return "Hello" // error
// }
// sum(10, 10);
// sum(10, "hello");

// function greeting(name?: string) {
//   if (name === undefined) {
//     return "Hello, stranger";
//   }
//   return `Hi ${name}`;
// }

// greeting();
// greeting("Dave");
// greeting(10); // error;

// function calculateTotalPrice(price: number, tax: number = 0.21) {
//   return price + price * tax;
// }

// calculateTotalPrice(10);
// calculateTotalPrice(10, 0.5);

// interface Cat {
//   name: string;
//   age: number;
//   meow(): void; // means that function isn't returned anything
//   eat: (food: string) => string;
// }

// const cat1: Cat = {
//   name: "Wiskas",
//   age: 2,
//   meow() {
//     console.log("Meow");
//   },
//   eat: (food) => {
//     return `Nyam, nyam, ${food}`;
//   },
// };
