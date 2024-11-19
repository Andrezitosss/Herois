    let cont = 0;
    let c;
    let universo = window.prompt("Digite o universo: ");
if (universo == "dc") {
    let heroidc = window.prompt("Digite um herói da DC").toLowerCase().trim();

    
    switch (heroidc) {
        case "batman":
            c = window.prompt("Quantas vezes você quer que a imagem do herói se repita?").trim();
            while (cont < c) {
                document.getElementById("div-1").innerHTML += "<div class='batman'></div>";
                cont++;
            }
            break;
        case "superman":
            c = window.prompt("Quantas vezes você quer que a imagem do herói se repita?").trim();
            while (cont < c) {
                document.getElementById("div-1").innerHTML += "<div class='superman'></div>";
                cont++;
            }
            break;
        default:
            document.getElementById("div-1").innerHTML = "Esse herói não existe.";
            break;
    }
} else if (universo == "marvel") {
    let heroimarvel = window.prompt("Digite o herói da Marvel").toLowerCase().trim();

    
    switch (heroimarvel) {
        case "spiderman": 
            c = window.prompt("Quantas vezes você quer que a imagem do herói se repita?").trim();
            while (cont < c) {
                document.getElementById("div-1").innerHTML += "<div class='spiderman'></div>";
                cont++;
            }
            break;
        case "ironman":
            c = window.prompt("Quantas vezes você quer que a imagem do herói se repita?").trim();
            while (cont < c) {
                document.getElementById("div-1").innerHTML += "<div class='ironman'></div>";
                cont++;
            }
            break;
        default:
            document.getElementById("div-1").innerHTML = "Herói não reconhecido...";
            break;
    }
}
