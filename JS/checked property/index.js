// checked property

const lettuce = document.getElementById("lettuceBtn");
const tomato = document.getElementById("tomatoBtn");
const carrot = document.getElementById("carrotBtn");
const sumbitBtn = document.getElementById("sumbitBtn");
const result = document.getElementById("result");

// check and display some vegetables
submitBtn.onclick = function() {
    if(carrot.checked) {
        result.textContent = "Carrot";
    }
    else if(tomato.checked) {
        result.textContent = "Tomato";
    }
    else if(lettuce.checked) {
        result.textContent = "Lettuce";
    }
    else {
        result.textContent = "None";
    }
}