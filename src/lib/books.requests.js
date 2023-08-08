import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  where,
  query,
  updateDoc,
  deleteDoc,
  writeBatch,
  increment,
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

//LEER
export const getBook = async (id) => {
  const document = doc(db, "items", id);
  const docSnap = await getDoc(document);
  if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };

  return null;
};
//ACTUALIZAR
export const updateBook = async (id, item) => {
  const newBook = await updateDoc(doc(db, "items", id), item);
  return;
};
//ELIMINAR
export const deleteBook = async (id) => {
  return await deleteDoc(doc(db, "items", id));
};

//OPERACION EN LOTE
export const updateManyBooks = async ( items ) => {
  const batch = writeBatch(db);
  
  items.forEach(({id, qty})=>{ 
    batch.update(doc(db, "items", id), {
      stock: increment(-qty)
    })
  })

  batch.commit();
}
