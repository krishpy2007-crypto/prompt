

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    if (!themeToggle) {
        console.error("Theme toggle button not found!");
        return;
    }

    themeToggle.addEventListener("click", function () {
        const isDark = document.body.classList.toggle("dark");

        themeToggle.textContent = isDark
            ? "Switch to light mode"
            : "Switch to dark mode";

        themeToggle.setAttribute("aria-pressed", String(isDark));
    });
});

