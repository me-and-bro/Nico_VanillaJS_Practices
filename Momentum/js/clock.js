const clock = document.querySelector("h2#clock");

function sayHello(){
    // let time =
    // clock.innerText

    console.log("Hi!");
}

function getCurrentTime(){
    const date = new Date();
    const dates = date.getDate(); 
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds().toString().padStart(2,0); 
    clock.innerText = `현재시각 ${dates}일  ${hours}:${minutes}:${seconds}`;
}

//setInterval(sayHello, 1000);

//setTimeout(sayHello, 2000);
getCurrentTime();
setInterval(getCurrentTime, 1000);