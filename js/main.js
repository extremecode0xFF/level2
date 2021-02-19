//TASK 1
document.getElementById("t1_btn1").onclick = removeBoxCSS;
document.getElementById("t1_btn2").onclick = removeBoxJS;
document.getElementById("t1_btn3").onclick = removeBoxCSSJS;

function removeBoxCSS() {
    let box = document.getElementById("t1_blackbox1");
    if (box) {
        box.style.display = "none";
    }
}

function removeBoxJS() {

    let box = document.getElementById("t1_blackbox2");
    if (box) {
        box.remove();
    }
}

function removeBoxCSSJS() {
    let box = document.getElementById("t1_blackbox3");
    if (!box.classList.contains("hidden")) {
        box.classList.add("hidden");
    }
}

//TASK 2
document.getElementById("t2_btn1").onclick = displayBOX;

function displayBOX() {
    let box = document.getElementById("t2_blackbox1");
    let modifier = "hidden";
    if (!box.classList.contains(modifier)) {
        box.classList.add(modifier)
    } else {
        box.classList.remove(modifier)
    }
}

//TASK 3
document.getElementById("t3_btn1").onclick = displayAllBOX;

function displayAllBOX() {
    let boxes = document.getElementsByClassName("t3_blackbox")
    let modifier = "hidden";
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        if (!box.classList.contains(modifier)) {
            box.classList.add(modifier);
        } else {
            box.classList.remove(modifier);
        }
    }
}


//TASK 4
document.getElementById("t4_button").onclick = selectAndDisplay;

function selectAndDisplay() {
    let getSelector = document.getElementById("t4_text-field").value;
    if (!getSelector) return;
    let listElement = document.querySelectorAll(getSelector);
    let modifier = 'hidden';

    for (let i = 0; i < listElement.length; i++) {
        let element = listElement[i];
        if (!element.classList.contains(modifier)) {
            element.classList.add(modifier)
        } else {
            element.classList.remove(modifier)
        }
    }
}

//TASK 5

let yellowBox = document.getElementById("t5_box")
yellowBox.addEventListener("click", eventYellowBox)

function eventYellowBox() {
    alert("Привет")
    yellowBox.removeEventListener("click", eventYellowBox)
    yellowBox.addEventListener("click", function () {
        yellowBox.remove()
    })
}

//TASK 6
let button = document.getElementById("t6_button")
button.addEventListener("mouseout",toggleRedBox)
button.addEventListener("mouseover",toggleRedBox)

function toggleRedBox() {
    let box = document.getElementById("t6_box")
    box.classList.toggle("hidden")
}

//TASK 7
let textBox = document.getElementById("t7_text-box");
let box = document.getElementById("t7_box")
textBox.addEventListener("focusin", ()=> box.classList.remove("hidden"))
textBox.addEventListener("focusout", ()=> box.classList.add("hidden"))
textBox.addEventListener("keypress", ()=> box.classList.add("hidden"))

//TASK 8
document.getElementById("t8_button").onclick = showImage;

function showImage() {
    let getLink = document.getElementById("t8_text-box").value;
    if(!getLink) return;
    let image = document.getElementById("t8_image")
    image.setAttribute("src", getLink)
}


