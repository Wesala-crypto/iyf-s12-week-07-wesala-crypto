const STORAGE_KEY = "challenge_form_draft";
const form = document.querySelector("#profile-form");
const statusMessage = document.querySelector("#status");

function restoreForm() {
    try {
        const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
        Object.entries(savedData).forEach(([name, value]) => {
            const field = form.elements.namedItem(name);
            if (field && typeof value === "string") {field.value = value;}
        });
    } catch {
        localStorage.removeItem(STORAGE_KEY);
    }
}

function saveForm() {
    const formData = Object.fromEntries(new FormData(form).entries());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    statusMessage.textContent = "Draft saved.";
}

restoreForm();
const saveInterval = window.setInterval(saveForm, 5000);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    window.clearInterval(saveInterval);
    form.reset();
    statusMessage.textContent = "Submitted. Draft cleared.";
});
