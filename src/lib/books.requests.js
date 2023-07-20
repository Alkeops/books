const BOOKS = [
  {
    id: 1,
    title: "Los tres mosqueteros",
    category: "Aventura",
    price: 550,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
    img: "https://images.cdn2.buscalibre.com/fit-in/360x360/ba/6a/ba6aa7885fba12057064610475c9bd41.jpg",
    stock: 10,
  },
  {
    id: 2,
    title: "El conde de montecristo",
    category: "Aventura",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",

    price: 805,
    img: "https://imagessl4.casadellibro.com/a/l/t5/64/9788497408264.jpg",
    stock: 10,
  },
  {
    id: 3,
    title: "El exorcista",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",

    category: "Terror",
    price: 299,
    stock: 5,
    img: "https://m.media-amazon.com/images/I/71yaw5OF7fL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    title: "El señor de los anillos",
    category: "Fantasia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",

    price: 450,
    img: "https://lamexicanalibrerias.com/wp-content/uploads/2022/09/359897_portada_el-senor-de-los-anillos-3-el-retorno-del-rey_j-r-r-tolkien_202206071121-scaled.jpg",
    stock: 6,
  },
  {
    id: 5,
    title: "El señor de los anillos",
    category: "Fantasia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",

    price: 450,
    img: "https://lamexicanalibrerias.com/wp-content/uploads/2022/09/359897_portada_el-senor-de-los-anillos-3-el-retorno-del-rey_j-r-r-tolkien_202206071121-scaled.jpg",
    stock: 6,
  },
  {
    id: 6,
    title: "El señor de los anillos",
    category: "Fantasia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",

    price: 450,
    img: "https://lamexicanalibrerias.com/wp-content/uploads/2022/09/359897_portada_el-senor-de-los-anillos-3-el-retorno-del-rey_j-r-r-tolkien_202206071121-scaled.jpg",
    stock: 6,
  },
];
//ESTO VA A CAMABIAR
//Simulación de una petición de red que nunca falla
export const getBooks = (id) => {
  const _books = id
    ? BOOKS.filter((book) => book.category.toLowerCase() === id)
    : BOOKS;

  return new Promise((res) => {
    setTimeout(() => {
      res(_books); //Se resuelve con el array de libros
    }, 500);
  });
};

export const getBook = (id) => {
  const book = BOOKS.filter((book) => book.id === id)[0];

  return new Promise((res) => {
    setTimeout(() => {
      res(book);
    }, 1500);
  });
};
