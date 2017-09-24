import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAiqoDKjosVEgaSsyszzfn11OQwhwl3lv8',
  authDomain: 'futsal-hamburg.firebaseapp.com',
  databaseURL: 'https://futsal-hamburg.firebaseio.com',
  projectId: 'futsal-hamburg',
  storageBucket: '',
  messagingSenderId: '540532331005'
};

export const startFirebase = () => {
  firebase.initializeApp(firebaseConfig);
};