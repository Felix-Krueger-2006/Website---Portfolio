if(localStorage.getItem("continue") !== "yes"){
    window.location.href = "index.html"
}

if (localStorage.getItem("language") === "German"){
    document.querySelector("#am_title").innerHTML = "Über mich";
    document.querySelector("#am_text").innerHTML = "Ich habe mich schon sehr früh für Technik interessiert, besonders die Medientechnik. Angefangen habe ich nicht mal mit einer Kamera, sondern mit dem Nintendo 2DS, welcher eine Kamera eingebaut hatte. Später bekam ich dann meine erste Kamera zum Fotografieren, mit dieser habe ich dann angefangen Bilder zu schießen und an diesem Punkt merkte ich, dass mir sowas einfach einen Riesen-Spaß macht. Aber zu meiner Lieblingsbeschäftigung bin ich erst vor 3 Jahren gekommen, den dort bekam ich meinen ersten Computer. Zum Anfang wie jeder in meinem Alter begann ich spiele zu spielen, aber kurz darauf interessierte ich mich auch für die Programmierung. Mit diesen Vorlieben im Gepäck fing ich an eine Ausbildung zu suchen und so stieß ich auf das OSZ KIM, wo ich heute meine Ausbildung zum Medientechnischer Assistenten mache, welche all meine Vorlieben ineinander vereint.";
    document.querySelector("#am_ms_title").innerHTML = "Meine Fähigkeiten"
}