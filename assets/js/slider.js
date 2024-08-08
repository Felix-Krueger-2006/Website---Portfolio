console.clear();
let count = 1;

function right() {
    let we = document.querySelector(".work_box1");
    let ds = document.querySelector(".work_box2");
    let vd = document.querySelector(".work_box3");
    let ph = document.querySelector(".work_box4");

    if (count === 1){
        we.classList.add("hidden");
        ds.classList.remove("hidden");
        vd.classList.add("hidden");
        ph.classList.add("hidden");
        count = 2;
    } else if (count === 2){
        we.classList.add("hidden");
        ds.classList.add("hidden");
        vd.classList.remove("hidden");
        ph.classList.add("hidden");
        count = 3;
    } else if (count === 3){
        we.classList.add("hidden");
        ds.classList.add("hidden");
        vd.classList.add("hidden");
        ph.classList.remove("hidden");
        count = 4;
    } else if (count === 4){
        we.classList.remove("hidden");
        ds.classList.add("hidden");
        vd.classList.add("hidden");
        ph.classList.add("hidden");
        count = 1;
    }
}

function left() {
    let we = document.querySelector(".work_box1");
    let ds = document.querySelector(".work_box2");
    let vd = document.querySelector(".work_box3");
    let ph = document.querySelector(".work_box4");

    if (count === 1){
        we.classList.add("hidden");
        ds.classList.add("hidden");
        vd.classList.add("hidden");
        ph.classList.remove("hidden");
        count = 4;
    } else if (count === 2){
        we.classList.remove("hidden");
        ds.classList.add("hidden");
        vd.classList.add("hidden");
        ph.classList.add("hidden");
        count = 1;
    } else if (count === 3){
        we.classList.add("hidden");
        ds.classList.remove("hidden");
        vd.classList.add("hidden");
        ph.classList.add("hidden");
        count = 2;
    } else if (count === 4){
        we.classList.add("hidden");
        ds.classList.add("hidden");
        vd.classList.remove("hidden");
        ph.classList.add("hidden");
        count = 3;
    }
}