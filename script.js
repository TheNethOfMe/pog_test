let pogCount = 0;
const pogStack = document.getElementById("pog-stack");
const addPogBtn = document.getElementById("add-pog-btn");
const resetPogBtn = document.getElementById("reset-pog-btn");
const colorList = ["red", "blue", "yellow", "green", "purple", "orange"];

const rando = (num) => {
    return Math.floor(Math.random() * num);
}

const stackPog = (colorClass) => {
    const newPog = document.createElement("div");
    newPog.classList.add("pog", colorClass);
    newPog.style.bottom = `${10 + (20 * pogCount)}px`;
    newPog.style.left = `${36 - (rando(3))}%`;
    pogStack.appendChild(newPog);
    pogCount++;
}

const resetPogs = () => {
    while (pogStack.firstChild) {
        pogStack.removeChild(pogStack.firstChild);
    }
    pogCount = 0;
}

addPogBtn.addEventListener("click", () => {
    const newPogColorClass = "pog-" + colorList[rando(colorList.length)];
    stackPog(newPogColorClass);
});
resetPogBtn.addEventListener("click", resetPogs)