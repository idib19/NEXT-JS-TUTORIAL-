"use client"

import { useState, useEffect } from 'react';
import { auth } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState<String>("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email
        setEmail(email);
      } else {
        router.push("/connexion")
      }
    });
  }, [router]); 

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center border-2 border-rose-500 mb-8">
          BIENVENUE SUR VOTRE APPLICATION
        </div>
        <div className="text-center border-2 border-rose-500">
        
          Utilisateur connecte : {email}
        </div>
      </div>
    </div>
  );
}
