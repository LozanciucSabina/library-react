import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import { books } from "./books";

const firebaseConfig = {
  apiKey: "AIzaSyBTDjBKcdofPHTH_sVZ9XuXkhEfEW986xk",
  authDomain: "my--bookshelf.firebaseapp.com",
  databaseURL: "https://my--bookshelf.firebaseio.com",
  projectId: "my--bookshelf",
  storageBucket: "my--bookshelf.appspot.com",
  messagingSenderId: "532196414126",
  appId: "1:532196414126:web:866cc9da11804a1ad1133f",
  measurementId: "G-QTKHSTE48K",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();

books.forEach((book) => db.collection("books").doc(book.title).set(book));

// Upload the file and metadata

// Create a reference to the file we want to download
// let imageRef = storage.ref().child(`images/${state.books.book.image}`);

// // Get the download URL
// imageRef.getDownloadURL().then(function(url) {
//   <img src={url}/>
// }).catch(function(error) {

//   // A full list of error codes is available at
//   // https://firebase.google.com/docs/storage/web/handle-errors
//   switch (error.code) {
//     case 'storage/object-not-found':
//       // File doesn't exist
//       break;

//     case 'storage/unauthorized':
//       // User doesn't have permission to access the object
//       break;

//     case 'storage/canceled':
//       // User canceled the upload
//       break;

//     ...

//     case 'storage/unknown':
//       // Unknown error occurred, inspect the server response
//       break;
//   }
// });
