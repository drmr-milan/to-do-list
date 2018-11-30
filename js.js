var btn = document.getElementById("btn");
var ull = document.getElementById("ull");
var lii = document.querySelectorAll(".li");
var removeX = document.querySelectorAll(".removeX");
var newCurrent = 5;

var removeAll = document.getElementById("removeAll");


function createLi() {
    var current = document.getElementById('text').value;
    var li = document.createElement("LI");
    var text = document.createElement("SPAN");
    var spanX = document.createElement("SPAN");    
    li.classList.add('li');
    text.classList.add('task');
    spanX.classList.add("removeX");
    text.innerHTML = current;
    spanX.innerHTML = "X";
    ull.appendChild(li);
    li.appendChild(text);
    li.appendChild(spanX);
}

function click() {
    if(document.getElementById('text').value === "") {
        alert("Please enter text");
        document.getElementById('text').focus();
    } else {
        var lii = document.querySelectorAll(".li");
        createLi();   
        window.newCurrent++;    
        document.getElementById('text').value = '';
    }
} 

var fcn = function (event) { click(); };

var fcn2 = function (event) {
    event.preventDefault();
    if (event.keyCode === 13) { click(); }    
};

btn.addEventListener('click', fcn, false);
window.addEventListener('keyup', fcn2, false);

window.addEventListener("click", function() {
    var removeX = document.querySelectorAll(".removeX");
    var task = document.querySelectorAll(".task");

    for(e=0; e<newCurrent;e++){
        
        removeX[e].addEventListener("click", doneOrNot);
        task[e].addEventListener("click", gray);
    }
})



function gray() {
    if(this.style.textDecorationLine !== "line-through") {
        this.style.textDecorationLine = "line-through";
        this.style.opacity = ".5";
    } else {
        this.style.textDecorationLine = "none";
        this.style.opacity = "1";
    }
}




function doneOrNot(e) {    
    this.parentElement.remove();
    window.newCurrent--;
}




removeAll.addEventListener('click', function() {

    var lii = document.querySelectorAll(".li");

    for(e=0; e<lii.length;e++){
        
        lii[e].remove();
    }
})