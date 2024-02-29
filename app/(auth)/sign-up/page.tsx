import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { app } from "@/firebase.config";




const email = "idiberthe19@gmail.com"
const password = "12345678"

export default async function SignUp() {

    const auth = getAuth(app);

    // form submit action that will trigger the createUserWithEmailAndPassword function 
    // then redirect if the sign-up is successful 

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

            <form>
                <label htmlFor=""> Email </label>
                <input type="email" />
                <label htmlFor=""> Mot de passe </label>
                <input type="password" />
                <button type="submit"> CONFIRMER </button>
            </form>
        </div>
    )

}