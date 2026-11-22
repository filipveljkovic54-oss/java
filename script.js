var porudzbine = [];

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

var forma = document.getElementById("forma");

if (forma) {
    forma.addEventListener("submit", function(e) {
        e.preventDefault();

        var ime = document.getElementById("ime").value.trim();
        var mesto = document.getElementById("mesto").value.trim();
        var proizvod = document.getElementById("poruka").value.trim();

        if (ime === "" || mesto === "" || proizvod === "") {
            alert("Popuni obavezna polja!");
            return;
        }

        ime = ime.toUpperCase();

        var nova = napraviPorudzbinu(ime, mesto, proizvod);
        porudzbine.push(nova);

        prikaziPorudzbine();
    });
}

function prikaziPorudzbine() {
    var lista = document.getElementById("listaPorudzbina");

    if (!lista) {
        return;
    }

    lista.innerHTML = "";

    for (var i = 0; i < porudzbine.length; i++) {
        var li = document.createElement("li");

        li.innerHTML = porudzbine[i].ime + " (" + porudzbine[i].mesto + ") - " + porudzbine[i].proizvod;

        li.addEventListener("click", function() {
            this.style.color = "green";
            this.style.fontWeight = "bold";
        });

        lista.appendChild(li);
    }

    var status = document.getElementById("status");
    var broj = brojPorudzbina();

    if (status) {
        switch (true) {
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
}

var slike = document.querySelectorAll("img");

var brojacKlikova = 0;

slike.forEach(function(slika) {
    slika.addEventListener("click", function() {
        brojacKlikova++;

        slika.style.border = "3px solid red";

        var p = document.getElementById("klikovi");

        if (p) {
            p.innerHTML = "Kliknuto na slike: " + brojacKlikova;
        }
    });
});
