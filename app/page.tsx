"use client"

import { auth } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home() {


  const [isLogin, setLoginState] = useState(false);
  const router = useRouter()

  const email = auth.currentUser?.email;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {

        setLoginState(true)
        console.log(user.email)
        // ...
      } else {
        router.push('/connexion')
      }
    });
  },[router])




  // here we need to check user auth satus 

  // if (authenticated) : -> {give access to the application}

  // if (!authenticated) : -> {redirect to sign-in} 


  return (

    <div className="flex flex-col justify-center items-center h-screen ">
      {isLogin ? (
        <div className="flex flex-col justify-center items-center">
          <div className="text-center border-2 border-rose-500 mb-8">
            BIENVENUE SUR VOTRE APPLICATION
          </div>
          <div className="text-center border-2 border-rose-500">

            Utilisateur connecte : {email}
          </div>
        </div>
      ) : (
        <h1>
          Vous etes deconnectez
        </h1>
      )}

    </div>
  )
};