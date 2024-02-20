import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { app } from "@/firebase.config";




const email = "idiberthe19@gmail.com"
const password = "12345678"

export default async function SignUp() {


    const auth = getAuth(app);

    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            console.log("inscription reussi ", user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });


    return (
        <div>
            <h1>
                SIGN UP PAGE
            </h1>
        </div>
    )

}