// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {getFirestore,collection,addDoc} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUz8KjoRMDPedR-3DTUQYMcbZglOoFXTs",
  authDomain: "event-registration-syste-aabf7.firebaseapp.com",
  projectId: "event-registration-syste-aabf7",
  storageBucket: "event-registration-syste-aabf7.firebasestorage.app",
  messagingSenderId: "5173117871",
  appId: "1:5173117871:web:f0f6969e2fa1f701a9655a",
  measurementId: "G-FZ4XWVVM20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// 5️⃣ Add the form submission code (THIS IS WHERE YOUR CODE GOES)
document.getElementById("registerForm").addEventListener("submit", async (e) => {

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let event = document.getElementById("event").value;

try {
    await addDoc(collection(db, "registrations"), {
        name: name,
        email: email,
        event: event
    });

    alert("Registration Successful ✅");

} catch (error) {
    console.error("Error adding document: ", error);
}

});


// Reset form after submit
try { document.getElementById('registerForm').reset(); } catch(e) {}
