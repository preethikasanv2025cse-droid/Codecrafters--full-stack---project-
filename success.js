// Fetch details from local storage
let name = localStorage.getItem("userName");
let dept = localStorage.getItem("userDept");
let reg = localStorage.getItem("userReg");
let event = localStorage.getItem("eventName");

// Show ticket details
document.getElementById("name").innerText = name;
document.getElementById("dept").innerText = dept;
document.getElementById("reg").innerText = reg;
document.getElementById("event").innerText = event;

// Move to Thank You Page after delay
setTimeout(() => {
    window.location.href = "thankyou.html";
}, 2500); // Wait 2.5 seconds before going to thank you screen