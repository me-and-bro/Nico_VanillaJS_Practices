const images = ["0.jpeg", "1.jpg", "2.jpg"];

// const image = document.querySelector("#background span:first-child");

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = "img/" + chosenImage;

// console.log(bgImage);

document.body.appendChild(bgImage);
