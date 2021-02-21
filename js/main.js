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
button.addEventListener("mouseout", toggleRedBox)
button.addEventListener("mouseover", toggleRedBox)

function toggleRedBox() {
    let box = document.getElementById("t6_box")
    box.classList.toggle("hidden")
}

//TASK 7
let textBox = document.getElementById("t7_text-box");
let box = document.getElementById("t7_box")
textBox.addEventListener("focusin", () => box.classList.remove("hidden"))
textBox.addEventListener("focusout", () => box.classList.add("hidden"))
textBox.addEventListener("keypress", () => box.classList.add("hidden"))

//TASK 8
document.getElementById("t8_button").onclick = showImage;

function showImage() {
    let getLink = document.getElementById("t8_text-box").value;
    if (!getLink) return;
    let image = document.getElementById("t8_image")
    image.setAttribute("src", getLink)
}

//TASK 9
document.getElementById("t9_button").onclick = showImages;

function showImages() {
    let linksArray = document.getElementById("t9_text-area").value.split("\n");
    let images = document.getElementById("t9_images")

    function containImg(link) {
        for (let image of images.getElementsByTagName("img")) {
            if (image.src === link) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < linksArray.length; i++) {
        let link = linksArray[i];
        if (!containImg(link)) {
            let image = document.createElement("img")
            image.src = link;
            images.appendChild(image)
        }
    }
}

//TASK 10
document.onmousemove = (e) => {
    document.getElementById("t10_coord").innerHTML =
        "X: " + e.clientX +
        " Y: " + e.clientY
}

//TASK 11
document.getElementById("t11_lang").innerText = `lang: ${document.documentElement.lang}`

//TASK 12
navigator.geolocation.getCurrentPosition((pos)=>{
    let latitude = pos.coords.latitude;
    let longitude = pos.coords.longitude;
    document.getElementById("t12_nav").innerText = `latitude: ${latitude} 
    longitude ${longitude}`
})


//TASK 13
window.addEventListener("load",loadData)
window.addEventListener("unload", saveData)

function loadData() {
    document.getElementById("t13_content1").innerHTML = localStorage.getItem("content1")
    document.getElementById("t13_content3").innerHTML = sessionStorage.getItem("content3")
    document.getElementById("t13_content2").innerHTML = getCookie("content2")

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
}

function saveData() {
    localStorage.setItem("content1", document.getElementById("t13_content1").innerHTML);
    sessionStorage.setItem("content3", document.getElementById("t13_content3").innerHTML)
    document.cookie = encodeURIComponent("content2") + '=' + encodeURIComponent(document.getElementById("t13_content2").innerHTML);
}

//TASK 14
document.getElementById("t14_button").onclick = moveToTop;
window.onscroll = view;

function view(){
    let blockUP = document.getElementById("t14");
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        blockUP.classList.remove("hidden");
    }else{
        blockUP.classList.add("hidden");
    }
}

function moveToTop() {
    window.scrollTo({top: 0,behavior:"smooth"})
}

//TASK 15

document.getElementById("t15_outbox").addEventListener("click", alertRedBox);
document.getElementById("t15_inbox").addEventListener("click", alertBlueBox);

function alertRedBox(){
    alert("Red Box")
}
function alertBlueBox(){
    alert("Blue Box")
    event.stopPropagation();
}

//TASK 16
document.getElementById("t16_button").onclick = disableScroll;
document.getElementById("t16_grey-box").onclick = activeScroll;
function disableScroll() {
    document.body.style.overflow = "hidden";
    document.getElementById("t16_grey-box").style.display = "block";
}

function activeScroll(){
    document.body.style.overflow = "";
    document.getElementById("t16_grey-box").style.display = "none";
}
//TASK 17
document.getElementById("t17_submit").onclick = disableSubmit;

function disableSubmit(){
    document.getElementById("t17_form")
        .setAttribute("onsubmit", "return false");
}

//TASK 18
document.getElementById("t18_button").onclick = ()=>{document.getElementById("t18_file").click()}
let dropArea = document.getElementById("t18_form");

dropArea.addEventListener('dragenter', preventDefaults, false)
dropArea.addEventListener('dragleave', preventDefaults, false)
dropArea.addEventListener('dragover', preventDefaults, false)
dropArea.addEventListener('drop', preventDefaults, false)

function preventDefaults (e) {
    e.preventDefault();
    e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
});
['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
});

function highlight(e) {
    dropArea.classList.add('highlight')
}
function unhighlight(e) {
    dropArea.classList.remove('highlight')
}

dropArea.addEventListener('drop', handleDrop, false)
let labelText = document.getElementById("t18_label");

function handleDrop(e) {
    let dt = e.dataTransfer
    let file = dt.files.item(0).name
    console.log(file)
    labelText.innerHTML = file;
}

document.getElementById("t18_file").onchange = function() {
    document.getElementById("t18_label").innerHTML = this.files[0].name;
}
