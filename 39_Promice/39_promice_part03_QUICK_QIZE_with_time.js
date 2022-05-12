console.log("Quick Qize: promise with time");



setInterval(() => {
    const date = new Date();
    // console.log(date);
    let seconds = date.getSeconds();
    let mintues = date.getMinutes();
    let hours = date.getHours();
    let html= `<h3> TIME IS:  ${hours}:${mintues}:${seconds} </h3>`
    
    let time = document.getElementById("time");
    time.innerHTML = html;
    
}, 1000);

 


