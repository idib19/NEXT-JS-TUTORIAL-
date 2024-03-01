import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";

// FONCTION D'ECRITURE FIREBASE 
export async function addUser(first: string, last: string, born: number) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first,
      last,
      born
    });
    console.log("Document written with ID: ", docRef.id);

    return {docRef}

  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

// FONCTION DE LECTURE FIREBASE 
export async function getUser (){
  try {
    const snapShot = await getDocs(collection(db, "users"));

    const userInfo = snapShot.docs

    return userInfo

    
  } catch (e) {
    console.error("Error reading the collection ", e);
  }
}

