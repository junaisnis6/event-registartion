import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "event-registration-syste-aabf7.firebaseapp.com",
  projectId: "event-registration-syste-aabf7",
  storageBucket: "event-registration-syste-aabf7.firebasestorage.app",
  messagingSenderId: "5173117871",
  appId: "1:5173117871:web:f0f6969e2fa1f701a9655a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadChart() {
    const querySnapshot = await getDocs(collection(db, "registrations"));

    let eventCounts = {};

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const event = data.event;

        if (eventCounts[event]) {
            eventCounts[event]++;
        } else {
            eventCounts[event] = 1;
        }
    });

    const labels = Object.keys(eventCounts);
    const values = Object.values(eventCounts);

    const ctx = document.getElementById("eventChart");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Registrations",
                data: values,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

loadChart();
