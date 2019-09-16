import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: 'AIzaSyCiVUuoJzaDZzTIw5sqLoy44dye-w_uGa0',
  authDomain: 'uvicphotographyexcursionclub.firebaseapp.com',
  databaseURL: 'https://uvicphotographyexcursionclub.firebaseio.com',
  projectId: 'uvicphotographyexcursionclub',
  storageBucket: 'uvicphotographyexcursionclub.appspot.com',
  messagingSenderId: '292518241291',
  appId: '1:292518241291:web:322ba7fd880d11e124530e',
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// Collections
const usersCollection = db.collection('users');
const tripsCollection = db.collection('trips');

export {
    db,
    auth,
    currentUser,
    usersCollection,
    tripsCollection,
};
