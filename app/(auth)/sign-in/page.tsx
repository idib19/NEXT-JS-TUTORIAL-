"use client"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { app } from "@/firebase.config";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

const email = "idiberthe19@gmail.com"
const password = "12345678"

export default async function SignIn() {

    const router = useRouter();
    const auth = getAuth(app);

    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in  
            const user = userCredential.user;
            // ...
            if (user) {
                console.log("connexion reussi ", user.email);
                window.location.assign('/')
            }
            else {
                console.log("conexion echiuee")
                redirect('/')
            }

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });


    return (
        <div>
            <h1>
                PAGE DE CONNEXION
            </h1>
        </div>
    )

}