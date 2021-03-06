import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const {
	VITE_API_KEY,
	VITE_AUTH_DOMAIN,
	VITE_PROJECT_ID,
	VITE_STORAGE_BUCKET,
	VITE_MESSAGING_SENDER_ID,
	VITE_APP_ID,
} = import.meta.env;


const firebaseConfig = {
	apiKey: VITE_API_KEY,
	authDomain: VITE_AUTH_DOMAIN,
	projectId: VITE_PROJECT_ID,
	storageBucket: VITE_STORAGE_BUCKET,
	messagingSenderId: VITE_MESSAGING_SENDER_ID,
	appId: VITE_APP_ID,
};

// init firebase
const app = initializeApp(firebaseConfig)

// get firebase firestore instance
const db = getFirestore(app)

const storage = getStorage(app)

export {
	app as default,
	db,
	storage,
}
