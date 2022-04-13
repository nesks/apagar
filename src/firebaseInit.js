import { initializeApp, getApps } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';


const firebaseConfig = {
    apiKey: "AIzaSyAXHxcArkwHQnmZYWSnswJNzXTYe3PIWO8",
    authDomain: "notification-cd4eb.firebaseapp.com",
    projectId: "notification-cd4eb",
    storageBucket: "notification-cd4eb.appspot.com",
    messagingSenderId: "176710030430",
    appId: "1:176710030430:web:ca3a88f0e0887e4425d0cf",
    measurementId: "G-HPGY8MJMHD"
  };

const apps = getApps();

const app = !apps.lenght ? initializeApp(firebaseConfig) : app[0]

export const messaging = getMessaging(app)
// export default firebase.initializeApp(firebaseConfig);