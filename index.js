let keyInputs = "";
document.addEventListener("keydown", (event) => {
    keyInputs += event.key;
    if (!keyInputs.toLowerCase().endsWith("massivesprengung"))
        return;
    autoScrollOn = false;
    document.body.classList.add("rotate");
});

