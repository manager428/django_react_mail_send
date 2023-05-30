import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAGHCOY6Zo3YfQ_3BZLH31i6L_zdbvnyJ0",
  authDomain: "circuit-sity.firebaseapp.com",
  databaseURL: "https://circuit-sity-default-rtdb.firebaseio.com",
  projectId: "circuit-sity",
  storageBucket: "circuit-sity.appspot.com",
  messagingSenderId: "841486897189",
};

firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();

export {
  database,
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider
};
