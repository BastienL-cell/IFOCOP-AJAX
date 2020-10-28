"use strict";

const root = document.querySelector("#root");
// NOTE: Création d'un nouvel objet XMLHttpRequest
const XHR = new XMLHttpRequest();

// NOTE: Le code s'effectue au chargement de la page
window.onload = () => {

    // NOTE: Connexion à l'url du serveur
    XHR.open("get", "http://localhost:3000", true)

    // NOTE: Dès que le statut de la requête est modifié
    XHR.onreadystatechange = () => {

        // NOTE: Permet de vérifier que la requête est allé jusqu'à la fin (statut 4)
        if (XHR.readyState === 4) {

            // NOTE: Permet de s'assurer d'un status 200 (Tout est OK, sinon 400 pour erreur)
            if (XHR.status === 200) {

                // NOTE: Transforme le format json en string
                let result = JSON.parse(XHR.responseText);
                // console.log(`result : ${result} || response : ${XHR.responseText}`)
                root.innerHTML = "";
                result.forEach(element => {
                    root.innerHTML += `
                        <td>Client n° ${element.id}</td>
                        <td>${element.nom}</td>
                        <td>${element.prenom}</td>`
                });
            }
        }
    }

    // NOTE: Envoie de l'ensemble de la requête
    XHR.send();
}

