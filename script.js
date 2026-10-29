
function calculer() {
    let a = document.getElementById("nombre1").value;
    let b = document.getElementById("nombre2").value;

    if (a === "" || b === "") {
        document.getElementById("resultat").innerHTML =
            "Veuillez saisir les deux nombres.";
        return;
    }

    a = Number(a);
    b = Number(b);

    let operation = document.getElementById("operation").value;
    let resultat;

    switch (operation) {
        case "+":
            resultat = a + b;
            break;

        case "-":
            resultat = a - b;
            break;

        case "*":
            resultat = a * b;
            break;

        case "/":
            if (b === 0) {
                document.getElementById("resultat").innerHTML =
                    "Erreur : division par zéro impossible.";
                return;
            }

            resultat = a / b;
            break;
    }

    document.getElementById("resultat").innerHTML =
        "Résultat : " + resultat;
}
