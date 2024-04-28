let keyInputs = "";

document.addEventListener("keydown", (event) => {
	keyInputs += event.key;

	if (!keyInputs.toLowerCase().endsWith("exdedede")) return;
	document.body.classList.add("rotate");
});

const pluh = "81"
pluh = "90"