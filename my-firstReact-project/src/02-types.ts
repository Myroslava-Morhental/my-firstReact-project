// // UNION

// {
//   let username: string | number = 10;
//   username = "dave";
//   username = true;

//   if (typeof username === "string") {
//     username.toUpperCase();
//   } else {
//     username.toFixed();
//   }
// }

// {
//   const array: (string | number | boolean)[] = [
//     123,
//     "Hello",
//     false,
//     "World",
//     123,
//     "TS",
//     true,
//   ];

//   array.push(10);
//   array.push({});
// }
// // Літеральні типи

// {
//   //   let size: "small" | "medium" | "large" | "extralarge" = "medium";
//   //   size = "small";
//   //   size = "jjdfd"; // error

//   type Size = "small" | "medium" | "large" | "extralarge";

//   const size1: Size = "small";
//   const size2: Size = "medium";

//   type IsManager = boolean;
//   const isManager: IsManager = true;
// }
