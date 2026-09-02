const lampSwitch = document.querySelector("#lampSwitch");
const lampStage = document.querySelector(".lamp-stage");
const switchText = document.querySelector(".switch-text");

lampSwitch.addEventListener("click", () => {

    lampStage.classList.toggle("on");

    const isOn = lampStage.classList.contains("on");

    switchText.textContent = isOn ? "ON" : "OFF";

});