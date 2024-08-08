console.clear();

function link(site, here) {
    document.querySelector("header").classList.add("wipe");
    document.querySelector("section").classList.add("wipe");
    document.querySelector("nav").classList.add("wipe_nav");
    
    if (here === "index"){
        document.querySelector("#main_box").setAttribute("id", "main_box_active");
        document.querySelector("#home_img").setAttribute("id", "home_img_active");
    } else if (here === "about_me"){

    } else if (here === "my_future"){
        
    } else if (here === "my_work"){

    } else if (here === "contact"){
        
    }

    setTimeout(() => {
        window.location.href = "./" + site + ".html";
    }, 500);
    
}