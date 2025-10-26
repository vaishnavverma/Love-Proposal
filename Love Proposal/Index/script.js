const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("click", (e) => {
    e.preventDefault(); // stop the link from navigating

    // Get the current button position
    const rect = noBtn.getBoundingClientRect();

    // Random small offsets (so it moves nearby, not too far)
    const offsetX = (Math.random() * 200) - 100; // range -100 to +100
    const offsetY = (Math.random() * 120) - 60;  // range -60 to +60

    // Calculate new position
    let newLeft = rect.left + offsetX;
    let newTop = rect.top + offsetY;

    // Keep button inside the window
    newLeft = Math.max(0, Math.min(window.innerWidth - rect.width, newLeft));
    newTop = Math.max(0, Math.min(window.innerHeight - rect.height, newTop));

    // Apply new position
    noBtn.style.position = "absolute";
    noBtn.style.left = `${newLeft}px`;
    noBtn.style.top = `${newTop}px`;
    noBtn.style.transition = "all 0.2s ease";
});
