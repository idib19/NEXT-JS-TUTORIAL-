"use client"

import { auth } from "@/firebaseConfig"
import { signOut, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation";


export default  function dashBoard() {

    const router = useRouter()
  
    const email = auth.currentUser?.email;
  
      onAuthStateChanged(auth, (user) => {
        if (user) {
  
          
          console.log(user.email)
          // ...
        } else {
          router.push('/connexion')
        }
      });

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log("Utilisateur deconnecte!")
        })

       router.push('/dashboard')
      };
    

    return (
        <div className=" text-center  p-4">
            <h1 className="text-3xl font-bold mb-4">BIENVENUE SUR TON DASHBOARD</h1>

            
            <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                onClick={handleSignOut}
            >
                Se déconnecter
            </button>

            <h1 className="text-3xl font-bold mb-4 mt-4 ">{email}</h1>
        </div>
    )

}
