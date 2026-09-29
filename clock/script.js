const textElements = [];

const clockWrapper = document.querySelector("#clockbody");

for (let i = 0; i < 4; i++) {
    const segmentElement = document.createElement("div");
    segmentElement.className = "segment";
    segmentElement.id = `segment-${i}`;

    const segmentText = document.createElement("p");
    segmentText.classList.add("text");
    segmentText.innerText = "0";
    segmentElement.appendChild(segmentText);

    clockWrapper.appendChild(segmentElement);
    textElements.push(segmentText);
}

const updateClock = () => {
    const time = new Date()
        .toLocaleTimeString("de-DE", {
            hour: "2-digit",
            minute: "2-digit",
        })
        .replaceAll(":", "");

    for (const [index, value] of time.split("").entries()) {
        textElements[index].innerText = value;
    }
};

updateClock();

if (!localStorage.getItem("test")) {
	document.body.addEventListener("click", (event) => {
		document.body.requestFullscreen();
	});
}