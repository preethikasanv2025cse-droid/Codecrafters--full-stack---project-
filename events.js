function bookEvent(eventName) {
    // Save selected event to local storage
    localStorage.setItem("selectedEvent", eventName);

    // Move to booking page
    window.location.href = "booking.html";
}