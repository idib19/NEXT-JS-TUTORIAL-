"use client"

import { useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '@/firebase.config';
import { useRouter } from 'next/navigation';

export default function SignIn() {
    const router = useRouter();

    const email = "idiberthe19@gmail.com"
    const password = "12345678"

    useEffect(() => {
        const signIn = async () => {
            const auth = getAuth(app);
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                // Signed in
                const user = userCredential.user;
                if (user) {
                    // Redirect to dashboard if there is a user
                    router.push('/dashboard');
                }
            } catch (error) {
                const errorCode = error;
                const errorMessage = error;
                // Handle the error accordingly
                console.error(errorCode, errorMessage);
                // Redirect to the home page or show an error message
                router.push('/'); // Optional: Navigate to '/' or show an error message instead
            }
        };

        signIn();
    }, [router]); // Add router to the dependency array to avoid re-run

    return (
        <div>
            <h1>PAGE DE CONNEXION</h1>
        </div>
    );
}
