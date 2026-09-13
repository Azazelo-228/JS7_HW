// let books = [
//   {
//     id: 1,
//     title: "JavaScript для начинающих",
//     pages: 300,
//     genre: "programming",
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     title: "Властелин колец",
//     pages: 1200,
//     genre: "fantasy",
//     rating: 4.9,
//   },
//   {
//     id: 3,
//     title: "CSS Глубокое погружение",
//     pages: 500,
//     genre: "programming",
//     rating: 4.3,
//   },
//   { id: 4, title: "Гарри Поттер", pages: 800, genre: "fantasy", rating: 4.8 },
//   {
//     id: 5,
//     title: "Алгоритмы на JavaScript",
//     pages: 600,
//     genre: "programming",
//     rating: 4.7,
//   },
// ];

// let progBooks = books.filter((book) => book.genre === "programming");
// console.log(progBooks);

// let pageSort = books.sort((a, b) => a.pages - b.pages);
// console.log(pageSort);

// let infoBooks = books.map((book) => `Id - ${book.id}, Книга ${book.title} имеет ${book.pages} страниц и рейтинг ${book.rating}`);
// console.log(infoBooks);

//2

let clothes = [
  { id: 1, name: "Футболка", price: 20, size: "M", color: "white" },
  { id: 2, name: "Куртка", price: 150, size: "L", color: "black" },
  { id: 3, name: "Штаны", price: 60, size: "S", color: "gray" },
  { id: 4, name: "Кроссовки", price: 120, size: "M", color: "white" },
  { id: 5, name: "Шапка", price: 15, size: "S", color: "black" },
];

let whiteClothes = clothes.filter((item) => item.color === "white");
console.log(whiteClothes);

let priceSort = clothes.sort((a, b) => b.price - a.price);
console.log(priceSort);

let sortCloth = clothes.map((item) => ({
  id: item.id,
  description: `Товар: ${item.name}, Цена: $${item.price}`,
  short: `${item.color} ${item.size}`,
}));

console.log(sortCloth);