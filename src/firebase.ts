import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCiVUuoJzaDZzTIw5sqLoy44dye-w_uGa0",
    authDomain: "uvicphotographyexcursionclub.firebaseapp.com",
    databaseURL: "https://uvicphotographyexcursionclub.firebaseio.com",
    projectId: "uvicphotographyexcursionclub",
    storageBucket: "uvicphotographyexcursionclub.appspot.com",
    messagingSenderId: "292518241291",
    appId: "1:292518241291:web:322ba7fd880d11e124530e",
});

const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// Collections
const usersCollection = db.collection("users");

const { Timestamp, GeoPoint } = firebase.firestore;

export {
    app,
    db,
    auth,
    currentUser,
    usersCollection,
    Timestamp,
    GeoPoint,
};
