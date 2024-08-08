console.clear();

function send(){
    let betreff = document.querySelector("#input_betreff");
    let value = document.querySelector("#input_value");

    window.location.href = "mailto:felix.krueger@oszkim.de?subject=" + betreff.value + "&body=" + value.value
}