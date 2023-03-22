const products = [
  { name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { name: "phone", price: 7000, brand: "iphone", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sungalss", price: 300, brand: "ray", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

// 1. .map
const brands = products.map((product) => product.brand);
// console.log(brands); // return [ 'lenovo', 'iphone', 'casio', 'ray', 'canon' ]
const prices = products.map((product) => product.price);
// console.log(prices); // return [ 3200, 7000, 3000, 300, 9000 ]

// 2. .forEach
// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color))
products.forEach((product) => {});

// 3. .filter
const cheap = products.filter((product) => product.price <= 5000);
// console.log(cheap);
const specificName = products.filter((product) => product.name.includes("n"));
// console.log(specificName);

// 4. find
const special = products.find((product) => product.name.includes("n"));
// console.log(special);
