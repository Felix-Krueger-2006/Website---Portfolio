if(localStorage.getItem("continue") !== "yes"){
    window.location.href = "index.html"
}

let web_title = document.querySelector("#web_title");
let des_title = document.querySelector("#des_title");
let des_pla_h = document.querySelector("#des_pla_h");
let des_pla_p = document.querySelector("#des_pla_p");
let des_3d_h = document.querySelector("#des_3d_h");
let des_3d_p = document.querySelector("#des_3d_p");
let vid_title = document.querySelector("#vid_title");
let vid_aud_h = document.querySelector("#vid_aud_h");
let vid_mus_h = document.querySelector("#vid_mus_h");
let pho_title = document.querySelector("#pho_title");
let pho_mac_h = document.querySelector("#pho_mac_h");
let pho_mac_p = document.querySelector("#pho_mac_p");
let pho_lan_h = document.querySelector("#pho_lan_h");
let pho_lan_p = document.querySelector("#pho_lan_p");
let pho_por_h = document.querySelector("#pho_por_h");
let pho_por_p = document.querySelector("#pho_por_p");

if (localStorage.getItem("language") === "German"){
    web_title.innerHTML = "Web Entwickler";
    des_title.innerHTML = "Designer";
    des_pla_h.innerHTML = "Plakatgestaltung";
    des_pla_p.innerHTML = "Dies ist ein Poster, das ich selbst gemacht habe. Es hat eine Weile gedauert und ich musste viele Hindernisse überwinden. Dazu gehören Beleuchtung, Perspektive und Bearbeitung. Meiner Meinung nach habe ich das meiste davon gut hinbekommen. Aber die Bearbeitung ist für mich immer noch schwierig. Am Ende bin ich mit meiner Arbeit zufrieden und das ist alles, was zählt.";
    des_3d_h.innerHTML = "3D Modeling";
    des_3d_p.innerHTML = "Dieses Panoramabild wurde von meinen Ausbildungskollegen und mir selbst erstellt. Ich habe die 3D-Objekte mit Cinema4D erstellt und Erfahrungen mit der Handhabung gesammelt. Meine Grundkenntnisse werde ich mit neuen interessanten Projekten verbessern.";
    vid_title.innerHTML = "Kameramann"
    vid_aud_h.innerHTML = "Hörbeitrag zum Thema: Schallereignisse"
    vid_mus_h.innerHTML = "Musik";
    pho_title.innerHTML = "Fotograf";
    pho_mac_h.innerHTML = "Markrofotografie";
    pho_mac_p.innerHTML = "Makrofotos sind eine tolle Möglichkeit, kleinen Dingen eine große Wirkung zu verleihen. Makrofotografie hat viele verschiedene Verwendungszwecke, von denen die meisten wahrscheinlich die Pflanzen- und Tierfotografie betreffen.";
    pho_lan_h.innerHTML = "Landschaftsfotografie";
    pho_lan_p.innerHTML = "Landschaftsbilder sind ideal für die Darstellung großer Flächen. Sei es das fahrende Auto im Hintergrund oder ein toll aussehendes Gebäude. Viele tolle Dinge werden in Landschaftsbildern kombiniert.";
    pho_por_h.innerHTML = "Portraitfotografie";
    pho_por_p.innerHTML = "Porträtfotos können etwas über eine Person aussagen. Hier gibt es keine Grenzen, was oft eine große Wirkung auf andere Menschen hat.";
}