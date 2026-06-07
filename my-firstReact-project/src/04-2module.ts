import axios from "axios";
// ENUM

// enum Status {
//   Active,
//   Paused,
//   Deleted,
//   Disabled,
// }

// const status: Status = Status.Active;
// console.log(status); //0

// enum PrivacyLevel {
//   Private = "Private",
//   Public = "Public",
// }

// const privacyLevel: PrivacyLevel = PrivacyLevel.Public;
// console.log(privacyLevel); // Public;

// enum StatusCode {
//   Success = 200,
//   NotFound = 404,
//   BadRequest = 401,
// }

// const statusCode: StatusCode = StatusCode.NotFound;
// console.log(statusCode);

// GENERICS

// interface Order {
//   id: number;
//   price: number;
//   status: string;
// }

// interface Client {
//   id: string;
//   name: string;
//   age: number;
// }

// interface OrderResponse {
//   items: Order[];
//   meta: {
//     page: number;
//     perPage: number;
//     totalCount: number;
//     hasNext: boolean;
//     hasPrevious: boolean;
//   };
// }

// interface ClientResponse {
//   items: Client[];
//   meta: {
//     page: number;
//     perPage: number;
//     totalCount: number;
//     hasNext: boolean;
//     hasPrevious: boolean;
//   };
// }

// interface APIResponse<T> {
//   items: T[];
//   meta: {
//     page: number;
//     perPage: number;
//     totalCount: number;
//     hasNext: boolean;
//     hasPrevious: boolean;
//   };
// }

// const orders: APIResponse<Order> = {
//     items: [{ id: 1, price: 100, status: "Active" }],
//     meta: {
//         page: 1,
//         perPage: 10,
//         totalCount: 100,
//         hasNext: true,
//         hasPrevious: false;
//     },
// };

// const clients: APIResponse<Client> = {
//     items: [{ id: "658a17e7-16c4-45d6-a593-4a1992356236", name: "Dave", age: 18 }],
//     meta: {
//         page: 1,
//         perPage: 10,
//         totalCount: 100,
//         hasNext: true,
//         hasPrevious: false;
//     },
// };

// function getFirstElement<T>(array: T[]): T {
//     return array[0];
// }

// getFirstElement<number>([1, 2, 3, 4]);
// getFirstElement<string>(["a", "b", "c", "d"]);
// getFirstElement<{ id: number }>([{ id: 1 }, { id: 2 }, { id: 3 }]);

// PROMISES

// interface Order {
//   id: number;
//   price: number;
//   status: string;
// }

// function getOrders(): Promise<Order[]> {
//   const orders: Order[] = [
//     { id: 1, price: 100, status: "Active" },
//     { id: 2, price: 150, status: "Pending" },
//   ];

//   return new Promise((resolve) => {
//     resolve(orders);
//   });
// }

// getOrders().then((data) => data.forEach((order) => console.log(order)));

// HTTP

// interface Order {
//   id: number;
//   price: number;
//   status: string;
// }

// async function fetchOrders(): Promise<Order[]> {
//   const response = await fetch("http://localhost:8080/api/orders");
//   const data = await response.json();

//   return data as Order[];
// }

// fetchOrders().then((orders) => orders.forEach((order) => console.log(order)));

// AXIOS

// interface Order {
//   id: number;
//   price: number;
//   status: string;
// }

// async function getOrders(): Promise<Order[]> {
//   const { data } = await axios.get<Order[]>("http://localhost:8080/api/orders");

//   return data;
// }

// ANY & MIXES (Unkown)
// const var1 = "Hello";

// const var2: any = "Hello";
// var2 = false;
// var2.unknown();

// let var3: unknown = "Hello";
// var3 = 10;
// var3 = [];

// INTERSECTIONS

// interface Cat {
//   meow(): void;
// }

// interface Dog {
//   woof(): void;
// }

// const myPets: Cat & Dog = {
//   meow() {
//     console.log("Meow");
//   },
//   woof() {
//     console.log("Woof");
//   },
// };

// UTILITY

interface Order {
  id: number;
  price: number;
  status: string;
  customerId: string;
}

// Partial

const order: Partial<Order> = {
  id: 1,
  price: 100,
  status: "Active",
  customerId: "658a17e7-16c4-45d6-a593-4a1992356236",
};

const shortOrder: Pick<Order, "id" | "status"> = {
  id: 1,
  status: "Active",
};

// Record
