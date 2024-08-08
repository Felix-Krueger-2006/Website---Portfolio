console.clear();

if(localStorage.getItem("continue") === "yes"){
    document.querySelector("#lang_bg").classList.add("hidden");
    if (localStorage.getItem("language") === "German"){
        document.querySelector("#contact_button").innerHTML = "Kontaktieren";
        document.querySelector("#my_jobs").innerHTML = "Ich bin <span id=" + "title" + "></span>";
        document.querySelector("#main_description").innerHTML = "Ich mache derzeit eine Ausbildung zum Medientechnischen Assistenten und interessiere mich sehr für die Medien und Technik von morgen. Ich versuche, meinen Ansprüchen gerecht zu werden, was leider nicht immer der Fall ist.";
    }
}

function local_lang(input){
    localStorage.setItem("language", input);
    localStorage.setItem("continue", "yes");

    window.location.href = window.location.href
}