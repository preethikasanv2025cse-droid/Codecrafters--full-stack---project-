// Display selected event
document.getElementById("selectedEventDisplay").innerHTML = 
"Selected Event: <b>" + localStorage.getItem("selectedEvent") + "</b>";

function confirmBooking() {
    // Collect user details
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;
    let regNo = document.getElementById("regNo").value;
    let event = localStorage.getItem("selectedEvent");

    // Validate
    if(name === "" || email === "" || regNo === "") {
        alert("Please fill all details!");
        return;
    }

    // Save for success page
    localStorage.setItem("userName", name);
    localStorage.setItem("userDept", department);
    localStorage.setItem("userReg", regNo);
    localStorage.setItem("eventName", event);

    // Go to success page
    window.location.href = "success.html";
}