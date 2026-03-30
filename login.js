import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBUz8KjoRMDPedR-3DTUQYMcbZglOoFXTs",
  authDomain: "event-registration-syste-aabf7.firebaseapp.com",
  projectId: "event-registration-syste-aabf7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        window.location.href = "register.html";
    })
    .catch(() => {
        alert("Login Failed ❌");
    });
});
