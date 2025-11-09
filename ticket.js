const name = localStorage.getItem("registeredName");
const dept = localStorage.getItem("department");
const reg = localStorage.getItem("regno");
const eventName = localStorage.getItem("selectedEventName");

// Display Ticket Details
document.getElementById("tName").innerText = name;
document.getElementById("tDept").innerText = dept;
document.getElementById("tReg").innerText = reg;
document.getElementById("tEvent").innerText = eventName;

// Generate QR Code with Robot Icon
let qr = new QRious({
    element: document.getElementById("qrcode"),
    value:` Name: ${name}\nDept: ${dept}\nReg: ${reg}\nEvent: ${eventName}`,
    size: 200,
    level: "H"
});

// Replace QR with Robot Image Center (overlay effect)
let qrCanvas = document.querySelector("#qrcode canvas");
let ctx = qrCanvas.getContext("2d");
let robot = new Image();
robot.src = "https://cdn-icons-png.flaticon.com/512/4712/4712100.png"; // Cute robot icon
robot.onload = () => {
    ctx.drawImage(robot, 80, 80, 40, 40);  // draw robot at center
};