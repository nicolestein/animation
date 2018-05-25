var box = document.getElementById("element");
var xpos = 0;
var ypos = 0;
var xstep = 2;
var ystep = 1;
var id = setInterval(frame, 5);

function frame() {
    if (xpos > 500 || xpos < 0) {
        xstep = -xstep;
    }
    if (ypos > 500 || ypos < 0) {
        ystep = -ystep;
    }

    xpos = xpos + xstep;
    ypos = ypos + ystep;
    box.style.top = ypos + 'px';
    box.style.left = xpos + 'px';
}
window.addEventListener("keypress", changeThingColor);

function changeThingColor(event) {
    if (event.key === "b") {
        element.style.background = "blue";
    } else if (event.key === "o") {
        element.style.background = "orange";
    } else if (event.key === "g") {
        element.style.background = "green";
    }
}
window.addEventListener("click", changeAnimationSpeed);

function changeAnimationSpeed(MouseEvent) {
    element.style.animationDuration = .5 + "s";

}
