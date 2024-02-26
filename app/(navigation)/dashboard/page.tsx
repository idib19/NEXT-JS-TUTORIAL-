import { auth } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { redirect } from "next/navigation";

export default async function dashBoard() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          
            
         
        } else {
          redirect("/connexion")
        }
      });

    return (
        <div>
            <h1>
                BIENVENUE SUR VOTRE DASHBOARD
            </h1>
        </div>
    )

}
