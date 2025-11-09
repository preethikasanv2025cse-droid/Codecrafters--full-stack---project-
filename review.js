document.getElementById("rName").innerHTML = "Name : " + localStorage.getItem("name");
document.getElementById("rEmail").innerHTML = "Email : " + localStorage.getItem("email");
document.getElementById("rDept").innerHTML = "Department : " + localStorage.getItem("department");
document.getElementById("rRegno").innerHTML = "Register Number : " + localStorage.getItem("regno");
document.getElementById("rEvent").innerHTML = "Event : " + localStorage.getItem("eventName");

// Edit Button → go back to form
document.getElementById("edit").addEventListener("click", () => {
    window.location.href = "booking.html";
});

// Confirm Button → go to success
document.getElementById("confirm").addEventListener("click", () => {

    // Save name & event for success page voice
    localStorage.setItem("registeredName", localStorage.getItem("name"));
    localStorage.setItem("selectedEventName", localStorage.getItem("eventName"));

    window.location.href = "success.html";
});