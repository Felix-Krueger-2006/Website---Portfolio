if(localStorage.getItem("continue") !== "yes"){
    window.location.href = "index.html"
}

if (localStorage.getItem("language") === "German"){
    document.querySelector("#con_title").innerHTML = "Kontaktieren"
    document.querySelector("#contact_btn").innerHTML = "Senden";
    document.querySelector("#input_value").setAttribute("placeholder", "Schreiben...");
    document.querySelector("#input_betreff").setAttribute("placeholder", "Betreff...");
}