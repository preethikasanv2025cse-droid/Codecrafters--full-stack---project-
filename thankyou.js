let name = localStorage.getItem("userName");
let event = localStorage.getItem("eventName");

// Display text
document.getElementById("thanks").innerText =
"Thank you " + name + " for registering for " + event + "!";

// Robot Voice
let speak = new SpeechSynthesisUtterance(
    "Thank you " + name + ", for registering for " + event + ". We are excited to see you!"
);
speak.rate = 1.05;
speak.pitch = 1.15;
speechSynthesis.speak(speak);

// Confetti Blast 🎉
function createConfetti() {
  for(let i = 0; i < 80; i++){
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");
    
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor =`hsl(${Math.random()*360},100%,60%)`;
    confetti.style.animationDuration = (Math.random()*2 + 2) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}
createConfetti();