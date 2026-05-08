let porudzbine = [];

function napraviPorudzbinu(ime, mesto, proizvod) {
    return {
        ime: ime,
        mesto: mesto,
        proizvod: proizvod
    };
}

function brojPorudzbina() {
    return porudzbine.length;
}

let forma = document.getElementById("forma");

if (forma) {
    forma.addEventListener("submit", function(e) {
        e.preventDefault();

        let ime = document.getElementById("ime").value.trim();
        let mesto = document.getElementById("mesto").value.trim();
        let proizvod = document.getElementById("poruka").value.trim();

        if (ime === "" || mesto === "" || proizvod === "") {
            alert("Popuni obavezna polja!");
            return;
        }

        ime = ime.toUpperCase();

        let nova = napraviPorudzbinu(ime, mesto, proizvod);
        porudzbine.push(nova);

        prikaziPorudzbine();
    });
}

function prikaziPorudzbine() {
    let lista = document.getElementById("listaPorudzbina");

    if (!lista) return;

    lista.innerHTML = "";

    for (let i = 0; i < porudzbine.length; i++) {
        let li = document.createElement("li");

        li.innerHTML = porudzbine[i].ime + " (" + porudzbine[i].mesto + ") - " + porudzbine[i].proizvod;

        li.addEventListener("click", function() {
            li.style.color = "green";
            li.style.fontWeight = "bold";
        });

        lista.appendChild(li);
    }

    let status = document.getElementById("status");
    let broj = brojPorudzbina();

    switch(true) {
        case (broj === 0):
            status.innerHTML = "Nema porudžbina";
            break;
        case (broj < 3):
            status.innerHTML = "Imate nekoliko porudžbina";
            break;
        default:
            status.innerHTML = "Veliki broj porudžbina!";
    }
}

let slike = document.querySelectorAll("img");

let brojacKlikova = 0;

slike.forEach(function(slika) {
    slika.addEventListener("click", function() {
        brojacKlikova++;

        slika.style.border = "3px solid red";

        let p = document.getElementById("klikovi");
        if (p) {
            p.innerHTML = "Kliknuto na slike: " + brojacKlikova;
        }
    });
});