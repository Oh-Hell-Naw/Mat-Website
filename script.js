"use strict";
let keyInputs = "";
document.addEventListener("keydown", (event) => {
    keyInputs += event.key;
    if (!keyInputs.toLowerCase().endsWith("exdedede"))
        return;
    document.body.classList.add("rotate");
});
const updateTemperature = (temperature) => {
    if (!temperature) {
        document.querySelector("#status").innerHTML = "du goofy nenne einen wert";
    }
    if (temperature > 10) {
        document.querySelector("#status").innerHTML = "mat would ride :3";
    }
    else {
        document.querySelector("#status").innerHTML = "mat would probably not ride :/";
    }
};
const inputElement = document.querySelector("#temptrnum");
inputElement.addEventListener("input", () => updateTemperature(Number(inputElement.value)));
updateTemperature(0);
//# sourceMappingURL=script.js.map