import { collection, addDoc } from "firebase/firestore"; 
import { db } from "@/firebase.config";

export async function addUser(first: string, last: string, born: number): Promise<void> {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first,
        last,
        born
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
