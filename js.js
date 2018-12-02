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

function bg() {

    var clientH = document.body.clientHeight;
    var scrollH = document.body.scrollHeight;

    if(scrollH > clientH) {
        document.body.style.backgroundImage = "none";
        document.body.style.height = "100%";
        document.body.style.backgroundImage = "linear-gradient(to right bottom, #403A3E, #BE5869)";
    } else {
        document.body.style.backgroundImage = "none";
        document.body.style.height = "100vh";
        document.body.style.backgroundImage = "linear-gradient(to right bottom, #403A3E, #BE5869)";
    }
}

var fcn = function (event) { click(); bg(); };

var fcn2 = function (event) {
    event.preventDefault();
    if (event.keyCode === 13) { click(); bg(); }    
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

function onLoadFunction() {
    var removeX = document.querySelectorAll(".removeX");
    var task = document.querySelectorAll(".task");

    for(e=0; e<newCurrent;e++){
        
        removeX[e].addEventListener("click", doneOrNot);
        task[e].addEventListener("click", gray);
    }
}

onLoadFunction();

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