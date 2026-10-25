const button = document.getElementById("openNote");
const note = document.getElementById("note");

button.addEventListener("click", () => {
    const isHidden = note.classList.toggle("hidden");

    button.textContent = isHidden
        ? "Read the note ↗"
        : "Close the note";

    if (!isHidden) {
        note.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
});