//*****MOUSE ILE TEPKI*****
let response_1 = document.querySelector(".response1");


//A
let b1 = document.querySelector("#b1");
let a1 = document.querySelector("#a1");

b1.addEventListener("click", (event) => {
    a1.play();
    b1.style.backgroundColor= "lightseagreen";
    response_1.style.backgroundColor = "lightseagreen";
});

// S
let b2 = document.querySelector("#b2")
let a2 = document.querySelector("#a2")

b2.addEventListener("click", (event) => {
    a2.play();
    b2.style.backgroundColor= "lightpink";
    response_1.style.backgroundColor = "lightpink";
});

// D
let b3 = document.querySelector("#b3")
let a3 = document.querySelector("#a3")

b3.addEventListener("click", (event) => {
    a3.play();
    b3.style.backgroundColor= "lightsalmon";
    response_1.style.backgroundColor = "lightsalmon";
});

// F
let b4 = document.querySelector("#b4")
let a4 = document.querySelector("#a4")

b4.addEventListener("click", (event) => {
    a4.play();
    b4.style.backgroundColor= "rosybrown";
    response_1.style.backgroundColor = "rosybrown";
});

// G
let b5 = document.querySelector("#b5")
let a5 = document.querySelector("#a5")

b5.addEventListener("click", (event) => {
    a5.play();
    b5.style.backgroundColor= "lightcoral";
    response_1.style.backgroundColor = "lightcoral";

});

// H
let b6 = document.querySelector("#b6")
let a6 = document.querySelector("#a6")

b6.addEventListener("click", (event) => {
    a6.play();
    b6.style.backgroundColor= "tomato";
    response_1.style.backgroundColor = "tomato";
});

// J
let b7 = document.querySelector("#b7")
let a7 = document.querySelector("#a7")

b7.addEventListener("click", (event) => {
    a7.play();
    b7.style.backgroundColor= "lightsteelblue";
    response_1.style.backgroundColor = "lightsteelblue";
});

// K
let b8 = document.querySelector("#b8")
let a8 = document.querySelector("#a8")

b8.addEventListener("click", (event) => {
    a8.play();
    b8.style.backgroundColor= "lightgreen";
    response_1.style.backgroundColor = "lightgreen";
});

// L
let b9 = document.querySelector("#b9")
let a9 = document.querySelector("#a9")

b9.addEventListener("click", (event) => {
    a9.play();
    b9.style.backgroundColor= "thistle";
    response_1.style.backgroundColor = "thistle";
});


//*****KLAVYE ILE TEPKI*****
addEventListener("keypress", (event) => {
    if(event.key === "a") {
        a1.play();
        b1.style.backgroundColor= "lightseagreen";
        response_1.style.backgroundColor = "lightseagreen";
    } else if (event.key === "s") {
        a2.play();
        b2.style.backgroundColor= "lightpink";
        response_1.style.backgroundColor = "lightpink";
    } else if (event.key === "d") {
        a3.play();
        b3.style.backgroundColor= "lightsalmon";
        response_1.style.backgroundColor = "lightsalmon";
    } else if (event.key === "f") {
        a4.play();
        b4.style.backgroundColor= "rosybrown";
        response_1.style.backgroundColor = "rosybrown";
    } else if (event.key === "g") {
        a5.play();
        b5.style.backgroundColor= "lightcoral";
        response_1.style.backgroundColor = "lightcoral";
    } else if (event.key === "h") {
        a6.play();
        b6.style.backgroundColor= "tomato ";
        response_1.style.backgroundColor = "tomato";
    } else if (event.key === "j") {
        a7.play();
        b7.style.backgroundColor= "lightsteelblue";
        response_1.style.backgroundColor = "lightsteelblue";
    } else if (event.key === "k") {
        a8.play();
        b8.style.backgroundColor= "lightgreen";
        response_1.style.backgroundColor = "lightgreen";
    } else if (event.key === "s") {
        a9.play();
        b9.style.backgroundColor= "thistle";
        response_1.style.backgroundColor = "thistle";
    }
});

