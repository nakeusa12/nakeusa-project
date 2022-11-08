import { initializeApp, getApps } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzlhEaulB9UW3fWv64t4ixgVodXknDXTU",
  authDomain: "nakeusa-project.firebaseapp.com",
  projectId: "nakeusa-project",
  storageBucket: "nakeusa-project.appspot.com",
  messagingSenderId: "591243211429",
  appId: "1:591243211429:web:f8fbf8960d187901f2134c",
  measurementId: "G-D9E73ML35P",
};

// Initialize Firebase
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const FirebaseAuth = getAuth();

export const Authentication = () => {
    return FirebaseAuth
}

export const SignUp = async (email, password) => {
    await createUserWithEmailAndPassword(FirebaseAuth, email, password)
}

export const SignIn = async (email, password) => {
    await signInWithEmailAndPassword(FirebaseAuth, email, password)
}

export const SignOut = async () => {
    await signOut(FirebaseAuth);
}


export const getSignInErrorMessage = (code) => {
    switch (code) {
        case 'auth/user-not-found':
            return 'Email tidak terdaftar'
        case 'auth/wrong-password':
        default:
            return 'Email atau password salah'
    }
}

export const getSignUpErrorMessage = (code) => {
    switch (code) {
        case 'auth/email-already-in-use':
            return 'Email sudah terdaftar'
        default:
            return 'Terjadi kesalahan saat proses sign up.'
    }
}