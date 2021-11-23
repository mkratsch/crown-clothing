// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithPopup,
} from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCTfOs49F6ZBlKKJILo9omnS9wWRzuBFr4',
	authDomain: 'crown-clothing-de401.firebaseapp.com',
	projectId: 'crown-clothing-de401',
	storageBucket: 'crown-clothing-de401.appspot.com',
	messagingSenderId: '1084218350830',
	appId: '1:1084218350830:web:434950dd3c2dff1a2ea7ff',
	measurementId: 'G-RPT4X03RR8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
