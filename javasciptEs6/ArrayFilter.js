// const data =[10,20,30,40]

// const result = data.filter(e=>e>20)

// console.log(result);

// const data = [
//   { name: "pubordee", salary: 25000, department: "โปรแกรมเมอร์" },
//   { name: "โจโจ้", salary: 30000, department: "การตลาด" },
//   { name: "นัท", salary: 10000, department: "ฝึกงาน" },
//   { name: "เบล", salary: 50000, department: "การตลาด" },
//   { name: "จอย", salary: 10000, department: "ฝึกงาน" },
// ];

// const result = data.filter((e) => {
//   return e.salary > 10000;
// }).filter(e=>e.department ==='การตลาด');

// console.log(result);

// const books = [
//   { title: "The Martian", author: "Andy Weir", year: 2011, rating: 4.4 },
//   { title: "Project Hail Mary", author: "Andy Weir", year: 2021, rating: 4.5 },
//   { title: "Dune", author: "Frank Herbert", year: 1965, rating: 4.2 },
//   { title: "Foundation", author: "Isaac Asimov", year: 1951, rating: 4.1 },
//   { title: "Neuromancer", author: "William Gibson", year: 1984, rating: 4.0 },
//   { title: "Mistborn: The Final Empire", author: "Brandon Sanderson", year: 2006, rating: 4.3 },
//   { title: "The Way of Kings", author: "Brandon Sanderson", year: 2010, rating: 4.6 },
//   { title: "A Fire Upon the Deep", author: "Vernor Vinge", year: 1992, rating: 4.0 }
// ];

// const one = books.filter(e=>e.year > 2000)
// const two = books.filter(e=>e.author ==="Andy Weir")
// const three = books.filter(e=>e.year < 2000).filter(e=> e.rating > 4.1)

// console.log('ข้อ 1 = ',one);
// console.log('ข้อ 2 = ',two);
// console.log('ข้อ 3 = ',three);

// const books = [
//   { title: "The Martian", author: "Andy Weir", year: 2011, rating: 4.4 },
//   { title: "Project Hail Mary", author: "Andy Weir", year: 2021, rating: 4.5 },
//   { title: "Dune", author: "Frank Herbert", year: 1965, rating: 4.2 },
//   { title: "Foundation", author: "Isaac Asimov", year: 1951, rating: 4.1 },
//   { title: "Neuromancer", author: "William Gibson", year: 1984, rating: 4.0 },
//   {
//     title: "Mistborn: The Final Empire",
//     author: "Brandon Sanderson",
//     year: 2006,
//     rating: 4.3,
//   },
//   {
//     title: "The Way of Kings",
//     author: "Brandon Sanderson",
//     year: 2010,
//     rating: 4.6,
//   },
//   {
//     title: "A Fire Upon the Deep",
//     author: "Vernor Vinge",
//     year: 1992,
//     rating: 4.0,
//   },
// ];

// const authorsOfHighRatedBooks = books.filter(e=>e.rating > 4.3).map(e=>e.author)
// console.log(authorsOfHighRatedBooks);

const books = [
  { title: "The Martian", author: "Andy Weir", year: 2011, rating: 4.4 },
  { title: "Project Hail Mary", author: "Andy Weir", year: 2021, rating: 4.5 },
  { title: "Dune", author: "Frank Herbert", year: 1965, rating: 4.2 },
  { title: "Foundation", author: "Isaac Asimov", year: 1951, rating: 4.1 },
  { title: "Neuromancer", author: "William Gibson", year: 1984, rating: 4.0 },
  {
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    year: 2006,
    rating: 4.3,
  },
  {
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    year: 2010,
    rating: 4.6,
  },
  {
    title: "A Fire Upon the Deep",
    author: "Vernor Vinge",
    year: 1992,
    rating: 4.0,
  },
];

const one = books.filter((e) => e.year >= 2000 || (e.year < 2000 && e.rating > 4.1));
console.log(one);

