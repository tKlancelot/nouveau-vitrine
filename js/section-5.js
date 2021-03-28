// alert('ohe');

// DOM
// récupérer les div 

let allCarre = document.querySelectorAll('.carre-test');

let message1 = "Je recommande Tarik à toute entreprise désireuse de renforcer son équipe avec quelqu'un de sérieux et fiable : sa capacité à s’impliquer et à mener un travail de façon rigoureuse et structuré en fait un atout majeur.";
let message2 = "En plus de ses compétences techniques, Tarik a été extrêmement performant dans son apprentissage et dans les mises en pratiques confiées. Son autonomie et sa remise en question ont été des éléments très remarqués et appréciés de ses formateurs. La pertinence et la justesse de ses propos sont également à souligner.";
let message3 = "Tarik a été recruté pour intégrer la formation DWWM sur une soixantaine de candidats pour 15 places. Il s'est montré à la hauteur : j'ai pu suivre sa progression tout au long de son parcours chez Human Booster. Sa soif de savoir et de connaissance l'ont fait progresser au-delà de nos espérances !";


let auteurs = ['❝aurélien❞','❝yohan❞','❝laëtitia❞'];
let messageArray = [message1,message2,message3];

// fonctions

for (let i = 0; i < messageArray.length; i++){
    let para = document.createElement('p');
    let h5 = document.createElement('h5');
    h5.textContent = auteurs[i];
    para.textContent = messageArray[i];
    para.classList.add('paragraphe');
    h5.classList.add('auteur');
    if(i == 1){
        para.classList.add('paragraphe','paraWhite');
    }
    allCarre[i].append(para);
    allCarre[i].append(h5);
}

