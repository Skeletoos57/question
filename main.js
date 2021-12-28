let yes = document.getElementById("yes");
let no = document.getElementById("no");

yes.addEventListener("click", function(e) {
    alert("Gracias, sabia que ibas a aceptar <3");
});

no.addEventListener("mouseenter", function(e) {
    let xpos = Math.floor(Math.random()*50);
    let ypos = Math.floor(Math.random()*50);
    no.style.left = xpos+"%";
    no.style.top  = ypos+"%";
});
