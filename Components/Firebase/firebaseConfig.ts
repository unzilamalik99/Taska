import firebase from 'firebase/app';
import 'firebase/auth'; 
 

const firebaseConfig = {
  apiKey: "AIzaSyD3E6kpQNRShxXZCr-pZ9J6aneqG-hqxvw",
  authDomain: "taska-app-756f8.firebaseapp.com",
  projectId: "taska-app-756f8",
  storageBucket: "taska-app-756f8.appspot.com",
  messagingSenderId: "159862689781",
  appId: "1:159862689781:web:99f2821a53eadae4aedabc"
};
try {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
} catch (error) {
  console.error('Error initializing Firebase:', error);
}

const auth: firebase.auth.Auth = firebase.auth();
export { auth };
