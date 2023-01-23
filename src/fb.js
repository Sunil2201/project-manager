import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDclFmkFJj83WDXDc3_GGxjA3ftiDtpw_0",
    authDomain: "project-manager-b419a.firebaseapp.com",
    projectId: "project-manager-b419a",
    storageBucket: "project-manager-b419a.appspot.com",
    messagingSenderId: "859469342745",
    appId: "1:859469342745:web:92eb3bdc1edfca2561a288"
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);
  const db = getFirestore();

  // db.settings({timestampsInSnapshots: true});

  export default db;