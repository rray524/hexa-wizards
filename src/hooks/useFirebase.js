import { useState, useEffect } from 'react';
import initFirebase from '../Pages/Access/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Modal, Button } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Congratulations! You have been logged in successfully! </h4>
            </Modal.Body>
        </Modal>
    );
}

//initial Firebase
initFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [modalShow, setModalShow] = useState(false);
    const [error, setError] = useState('');
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const registerUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setError('');
                const newUser = { email, displayName: name };
                //user update to firebase
                setUser(newUser);
                // send user to Database 
                saveUser(email, name);
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
    // save user to mongo
    const saveUser = (email, displayName) => {
        const user = { email, displayName }
        fetch('https://drab-gray-firefly-garb.cyclic.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
    }
    useEffect(() => {
        fetch(`https://drab-gray-firefly-garb.cyclic.app/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email])
    return {
        user,
        registerUser,
        logout,
        loginUser,
        isLoading,
        error,
        setError,
        admin
    }

};

export default useFirebase;