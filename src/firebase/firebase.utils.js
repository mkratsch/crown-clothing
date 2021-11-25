// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import {
	setDoc,
	doc,
	getFirestore,
	//collection,
	//getDocs,
	getDoc,
} from 'firebase/firestore';
import { getAuth, signInWithPopup } from 'firebase/auth';
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
// Sign in with Google
export const signInWithGoogle = () => {
	signInWithPopup(auth, provider).catch((error) => {
		// Handle errors here
		const errorCode = error.code;
		const errorMessage = error.message;
		// The email of the user's account used
		const email = error.email;
		// The AuthCredential type that was used
		const credential = GoogleAuthProvider.credentialFromError(error);
		// Do whatever to handle error
		console.log({
			errorCode,
			errorMessage,
			email,
			credential,
		});
	});
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = doc(firestore, `users/${userAuth.uid}`);
	console.log(userRef);
	const userSnapshot = await getDoc(userRef);

	// `.exists` is now a function on the snapshot, not a property
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			// Now calls `setDoc` function; DocumentReference passed as first argument
			// and data to set is second argument
			await setDoc(userRef, {
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};
