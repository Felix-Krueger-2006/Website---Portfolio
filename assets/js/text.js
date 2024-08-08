let round = 0;
let jobs = ["WEB ENGINEER", "DESIGNER", "VIDEOGRAPHER", "PHOTOGRAPHER"];

if (localStorage.getItem("language") === "German"){
    jobs = ["WEB ENTWICKLER", "DESIGNER", "KAMERAMANN", "FOTOGRAF"];
}

setTimeout(start, 500);

function start(){
    let time = 0;
    let length = jobs[round].length;

    for (let i = 0; i <= length; i++){
        setTimeout(() => {
            document.querySelector("#title").innerHTML = jobs[round].substring(0,i);
        }, time);
        if (i === length){
            setTimeout(back, 2000);
        }
        time += 100;
    }
}

function back() {
    let time = 2000;
    let length = jobs[round].length;

    for (let i = length; i > -1; i--){
        setTimeout(() => {
            document.querySelector("#title").innerHTML = jobs[round].substring(0,i);
            if (i === 0){
                setTimeout(() => {
                    round = (round + 1) % jobs.length;
                    start();
                }, 300);
            }
        }, time);
        time += 100;
    }
}
