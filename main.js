let square = document.getElementById("sqr");
let widthInput = document.getElementById("width");
let heightInput = document.getElementById("height");
let BorderRadius = document.getElementById("BorderRadius");
let background = document.getElementById("background");
let resize = document.getElementById("resize");
let defaultS = document.getElementById("default");


resize.addEventListener("click", ()=>{
    square.style.width = `${widthInput.value}vw`;
    square.style.height = `${heightInput.value}vh`;
    square.style.borderRadius = `${BorderRadius.value}px`
    square.style.background = `${background.value}`

})

let widthd = '30vw';
let heightd = '40vh';
let bgd = "blue";

defaultS.addEventListener("click", ()=>{
    square.style.width = widthd;
    square.style.height = heightd;
    square.style.borderRadius = '0px';
    square.style.background = bgd;
    square.style.width ='';
    square.style.height = '';
    square.style.borderRadius ='';
    square.style.background = '';

})