const BOOKS = [
  {
    title: "Los tres mosqueteros",
    category: "aventura",
    price: 550,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
    img: "https://images.cdn2.buscalibre.com/fit-in/360x360/ba/6a/ba6aa7885fba12057064610475c9bd41.jpg",
    stock: 10,
  },
  {
    title: "El conde de montecristo",
    category: "aventura",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
    price: 805,
    img: "https://imagessl4.casadellibro.com/a/l/t5/64/9788497408264.jpg",
    stock: 10,
  },
  {
    title: "El exorcista",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
    category: "terror",
    price: 299,
    stock: 5,
    img: "https://m.media-amazon.com/images/I/71yaw5OF7fL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "El señor de los anillos 1",
    category: "fantasia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
    price: 450,
    img: "https://m.media-amazon.com/images/I/41N9hq9CqSL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    stock: 6,
  },
  {
    title: "El señor de los anillos 2",
    category: "fantasia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",

    price: 450,
    img: "https://m.media-amazon.com/images/I/41N9hq9CqSL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    stock: 6,
  },
  {
    title: "El señor de los anillos 3",
    category: "fantasia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",

    price: 450,
    img: "https://m.media-amazon.com/images/I/41N9hq9CqSL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    stock: 6,
  },
];

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  where,
  query,
} from "firebase/firestore";
import { db } from "./config";

const booksRef = collection(db, "items");

export const getBooks = async (category) => {
  const q = category
    ? query(booksRef, where("category", "==", category))
    : booksRef;

  let books = [];
  const querySnapshot = await getDocs(q);
  //forEach es un metodo del retorno de getDocs y no es el de javascript
  querySnapshot.forEach((doc) => {
    books = [...books, { ...doc.data(), id: doc.id }];
  });

  return books;
};

export const getBook = async (id) => {
  const document = doc(db, "items", id);
  const docSnap = await getDoc(document);
  if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };

  return null;
};

export const cargarData = async () => {
  BOOKS.forEach(async (book) => {
    await addDoc(booksRef, book)
  })
}