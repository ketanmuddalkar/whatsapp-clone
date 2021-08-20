import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCaWIy7Twqaxl2FVc0EkfOu4v8l8bYTWjU",
    authDomain: "whatsapp-clone-47742.firebaseapp.com",
    projectId: "whatsapp-clone-47742",
    storageBucket: "whatsapp-clone-47742.appspot.com",
    messagingSenderId: "932142622104",
    appId: "1:932142622104:web:c257536ce3ec9e0217f7ed"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;