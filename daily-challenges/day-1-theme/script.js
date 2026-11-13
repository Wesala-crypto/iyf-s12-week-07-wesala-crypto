const toggleButton = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("challenge_theme");
document.body.classList.toggle("dark", savedTheme === "dark");
toggleButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("challenge_theme", isDark ? "dark" : "light");
});
