var produits = document.getElementsByClassName("box");
let totalGeneralElement = document.getElementById("total-general"); // Élément où le total général sera affiché

// Fonction pour calculer le total général
function updateTotalGeneral() {
    let totalGeneral = 0;

    for (let i = 0; i < produits.length; i++) {
        let totalProduit = produits[i].children[2].children[1];
        totalGeneral += parseInt(totalProduit.innerText) || 0; // Ajout de vérification pour éviter NaN
    }

    totalGeneralElement.innerText = `Total Général: ${totalGeneral} XOF`;
}

// Ajout des écouteurs sur chaque produit
for (let i = 0; i < produits.length; i++) {

    let btnPlus = produits[i].children[3].children[2];
    let btnMinus = produits[i].children[3].children[0];
 

    let prixUnit = produits[i].children[1].children[1];
    let total = produits[i].children[2].children[1];
    let nombre = produits[i].children[3].children[1];

    let prixUnitaire = parseInt(prixUnit.innerText);
    let qty = parseInt(nombre.innerText);

    // Augmenter la quantité
    btnPlus.addEventListener("click", function () {
        qty++;
        nombre.innerText = qty;
        total.innerText = prixUnitaire * qty;
        updateTotalGeneral(); // Mise à jour du total général
    });

    // Diminuer la quantité
    btnMinus.addEventListener("click", function () {
        if (qty > 0) {
            qty--;
            nombre.innerText = qty;
            total.innerText = prixUnitaire * qty;
            updateTotalGeneral(); // Mise à jour du total général
        }
    });

    
}

// Mise à jour initiale du total général
updateTotalGeneral();
