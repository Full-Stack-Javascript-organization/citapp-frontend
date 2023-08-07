import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDGualeqdPwQmTQ0HnDX1wpz6DXIN4wZdI',
  authDomain: 'citapp-csis3380.firebaseapp.com',
  projectId: 'citapp-csis3380',
  storageBucket: 'citapp-csis3380.appspot.com',
  messagingSenderId: '419785523714',
  appId: '1:419785523714:web:d68ee34c01552b536d1d1b',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
