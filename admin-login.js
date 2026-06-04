document.getElementById("adminLoginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPassword").value;

    if(email === "admin@gmail.com" && password === "admin123"){
        localStorage.setItem("admin", "true");
        window.location.href = "admin.html";
    } else {
        alert("Invalid Admin ❌");
    }
});
