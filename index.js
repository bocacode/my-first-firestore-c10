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
const candy = {
  name: "Skittles",
  unitPrice: 3.99,
  size: "16 oz",
  color: "green",
  inventory: 144,
  productNumber: 7,
}

db.collection('products').add(candy)
  .then(doc => console.log("added doc: " + doc.id))
  .catch(err => console.log(err))
