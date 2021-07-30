const container = document.querySelector("#container"); //Hauptcontainer für die Boxen
const cssRoot = document.querySelector(":root") //Root-Container im CSS für die Width und Height der Boxen
let cssRootStyle = getComputedStyle(cssRoot);
console.log(cssRootStyle.getPropertyValue("--boxWidth"));
console.log(cssRootStyle.getPropertyValue("--boxHeight"));
createBox();

function createBox (gridsize = 16) {
    if (gridsize != 16) {
        cssRoot.style.setProperty("--boxSize", `Calc(100% / ${gridsize})`);
    }
    for (let boxid = 0; boxid < (gridsize * gridsize); boxid++) {
        const box = document.createElement("div"); //Erstellen eines div objektes
        box.id=boxid; //hinzufügen der ID
        box.classList.add("box") //Hinzufügen der Klasse
        container.appendChild(box); //Hinzufügen der Box zum Parent
    }
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mouseover", function(e){
    box.classList.add("painted");
}))
}



const button = document.querySelector("#reset");
button.addEventListener("click",function (e){
    let gridsize= spielGroese()
    container.innerHTML="";
    createBox(gridsize);
})
function spielGroese () {
    let gridsize = prompt("Wie groß soll das Spielfeld sein? Zwischen 1 - 100","16");
    if (gridsize > 100 || gridsize < 1) { 
        gridsize = 16
    }
    return gridsize;
}

