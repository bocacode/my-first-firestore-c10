// Import the tools we need from firebase-admin
import { initializeApp, cert } from "firebase-admin/app"; // we use to connect to our firebase project
import { getFirestore } from "firebase-admin/firestore"; // we use to connect to Firestore

// Import our credentials from a secret file
import { credentials } from "./credentials.js";

// Connect to our Firebase project
initializeApp({
  credential: cert(credentials)
});

// Connect to Firestore DB
const db = getFirestore();

// Add a product to our products collection
const candy2 = {
  name: "Twix",
  unitPrice: 2.99,
  size: "12 oz",
  color: "gold",
  inventory: 288,
  productNumber: 2,
}

// How to add a document to Firestore:

// db.collection('products').add(candy2) // While we are waiting for the promise...
//   .then((doc) => {
//     console.log("added doc: " + doc.id)
//     // I can be sure inside .then() that the first process was completed successfully
//   })
//   .catch(err => console.log(err))

// db.collection('products').doc('Aw6bH9bExqSbe7Kr8LJ4').delete()

// How to update a document in Firestore:
db.collection('products').doc('Aw6bH9bExqSbe7Kr8LJ4').update({
  inventory: 555,
  customerFavorite: true
})


// How to read a document from Firestore:

db.collection('products').doc('Aw6bH9bExqSbe7Kr8LJ4').get()
  .then(doc => {
    console.log(doc.data());
  })
  .catch(err => console.log(err));


  // How to get a whole collection:

db.collection('products').get()
  .then(collection => {
    const productList = collection.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    console.table(productList);
  })
  .catch(console.log);

