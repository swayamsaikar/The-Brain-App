import firebase from "firebase";
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDTjGWS45pb0QNQw8--fPC8k0R1hn-rdFc",
  authDomain: "brain-app-6f875.firebaseapp.com",
  databaseURL: "https://brain-app-6f875-default-rtdb.firebaseio.com",
  projectId: "brain-app-6f875",
  storageBucket: "brain-app-6f875.appspot.com",
  messagingSenderId: "206653789525",
  appId: "1:206653789525:web:2c3ff3b91918fa4e4b8bdc",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
