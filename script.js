function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  
    document.getElementById("time").textContent = time;
    document.getElementById("date").textContent = date;
  }
  
  setInterval(updateClock, 1000);
  updateClock(); // Run once immediately
  