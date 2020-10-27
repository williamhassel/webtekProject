// Canvas

const canvas = document.getElementById("canvasId");
const ctx = canvas.getContext("2d");


function drawLine(fromX, fromY, toX, toY, colour) {
    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.strokeStyle = colour;
    ctx.lineTo(fromX, fromY);
    ctx.stroke();
}


function drawText(text, x, y) {
    ctx.fillStyle = 'black';
    ctx.fillText(text, x, y);
}

function drawCircle(x, y, r, sAngle, eAngle, colour) {
    ctx.beginPath();
    ctx.arc(x, y, r, sAngle, eAngle);
    ctx.fillStyle = colour;
    ctx.fill();
    ctx.stroke();
}

function rektangel(x, y, width, height, colour) {
    ctx.beginPath();
    ctx.fillStyle = colour;
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x,y,width,height)
    ctx.stroke();
}

function rektangelLine(x, y, width, height, colour, line) {
    ctx.beginPath();
    ctx.fillStyle = colour;
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = line;
    ctx.strokeRect(x,y,width,height)
    ctx.stroke();
}

// Bakgrunn
rektangel(0,0,canvas.width,canvas.height, "lightgreen");

// Hus
//stor
rektangel(280,180,180,80,"beige");
//lang
rektangel(180,100,60,140,"beige");
//lite
rektangel(300,80,100,40,"beige");
//bro
rektangel(240,224,40,16,"beige");

// Fortau
rektangelLine(240,150,100,12,"darkgray","black");
rektangelLine(340,120,12,60,"darkgray","black");

// Parkering
rektangelLine(500,0,100,100,"grey","white");

for (y=8; y<100; y+=16) {
    drawLine(510, y, 540, y, "white");
    drawLine(560, y, 590, y, "white");
}

// Plassering

function plassering(sentrumx, sentrumy) {
    ctx.beginPath();
    ctx.arc(sentrumx, sentrumy, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
}

hoved = document.getElementById("hoved");
mellom = document.getElementById("mellom");
gymsal = document.getElementById("gymsal");
resepsjon = document.getElementById("resepsjon");
parkering = document.getElementById("parkering");

hoved.addEventListener("click", hovedDot);
mellom.addEventListener("click", mellomDot);
gymsal.addEventListener("click", gymsalDot);
resepsjon.addEventListener("click", resepsjonDot);
parkering.addEventListener("click", parkeringDot);

function hovedDot() {
    plassering(370,220);
}
function mellomDot() {
    plassering(210,170);
}
function gymsalDot() {
    plassering(350,100);
}
function resepsjonDot() {
    plassering(300,200);
}
function parkeringDot() {
    plassering(550,50);
}

