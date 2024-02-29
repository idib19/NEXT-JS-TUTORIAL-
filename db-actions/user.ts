import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebase.config";


export async function addUser(first: string, last: string, born: number) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first,
      last,
      born
    });
    console.log("Document written with ID: ", docRef.id);

    return {docRef}

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


export async function getUser (){
  try {
    const snapShot = await getDocs(collection(db, "users"));

    const userInfo = snapShot.docs
    return userInfo

    
  } catch (e) {
    console.error("Error reading the collection ", e);
  }
}

