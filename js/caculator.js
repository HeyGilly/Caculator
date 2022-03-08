const displayInput = document.getElementById('input')
const clearInput = document.getElementById("clear");


clearInput.addEventListener("click", clear);

function clear() {
    displayInput.innerHTML = "0";
}



const oneBtn = document.getElementById("one");

oneBtn.addEventListener("click", showcase);

function showcase(e){
    e.preventDefault()
    displayInput.innerHTML = oneBtn.value;
}