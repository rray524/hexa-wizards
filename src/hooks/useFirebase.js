import { useState, useEffect } from 'react';
import initFirebase from '../Pages/Access/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

//initial Firebase
initFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);

    const registerUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setError('');
                const newUser = { email, displayName: name };
                //user update to firebase
                setUser(newUser);
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            }).finally(() => setIsLoading(false));
    }

    // Login user
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => setIsLoading(false));

    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);

        });
        return () => unsubscribed;
    }, [])

    //logout user
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            const errorMessage = error.message;
            setError(errorMessage);
        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        registerUser,
        logout,
        loginUser,
        isLoading,
        error,
        setError,
    }

};

export default useFirebase;