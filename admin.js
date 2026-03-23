import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBUz8KjoRMDPedR-3DTUQYMcbZglOoFXTs",
  authDomain: "event-registration-syste-aabf7.firebaseapp.com",
  projectId: "event-registration-syste-aabf7",
  storageBucket: "event-registration-syste-aabf7.firebasestorage.app",
  messagingSenderId: "5173117871",
  appId: "1:5173117871:web:f0f6969e2fa1f701a9655a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const table = document.getElementById("dataTable");

async function loadData(){

const querySnapshot = await getDocs(collection(db,"registrations"));

querySnapshot.forEach((doc)=>{

const data = doc.data();

let row = table.insertRow();

row.insertCell(0).innerText = data.name;
row.insertCell(1).innerText = data.email;
row.insertCell(2).innerText = data.event;

});

}

loadData();