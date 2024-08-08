if(localStorage.getItem("continue") !== "yes"){
    window.location.href = "index.html"
}

if (localStorage.getItem("language") === "German"){
    document.querySelector("#jf_title").innerHTML = "Die Zukunft Des Jobs";
    document.querySelector("#jf_text").innerHTML = "Die Zukunft dieses Berufs ist noch ungewiss, da es ihn noch nicht sehr lange gibt. Aber es gibt einige Aspekte, bei denen ich mir sicher sein kann, dass sie meine Karriere beeinflussen werden. Mehr Unternehmen werden versuchen, ein Online-Geschäft aufzubauen, was diesen Beruf sehr populär machen wird. Die größte Veränderung wird durch den Fortschritt der modernen KI kommen, die in der Lage sind, selbst Inhalte zu erstellen, und zwar mit weniger Zeit- und Kostenaufwand.";
    document.querySelector("#mf_title").innerHTML = "Die Zukunft Von Mir";
    document.querySelector("#mf_text").innerHTML = "Ich bin mir meiner Zukunft nicht sicher, ich habe keine Ambitionen in meinem Alter. Aber ich versuche, Ziele zu finden und diese umzusetzen. Mein derzeitiges Ziel ist es, ein Praktikum zu machen und dann einen Job zu finden. Diese Dinge machen mir Angst, aber ich bin bereit, diese Ziele zu erreichen. Ich lasse mich treiben und versuche, das Leben zu genießen. Meiner Meinung nach ist ein Leben welches man einem großen Ziel widmet, kein richtiges Leben.";
}

