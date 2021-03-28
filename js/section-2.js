

// déclaration DOM

let myBody = document.querySelector('body');


function homePage(){


    
    let menuIcon = document.querySelector('.menu-icon');
    let centerFrame = document.querySelector('.centerFrame');
    let bandeDiapo = document.querySelectorAll('#circleShow div');


    let boutonSwitch = document.getElementById('anim');
    let bigCircle = document.querySelector('.medium-square-white');
    let leftPanel = document.querySelector('.small-square-white');
    let rightPanel = document.querySelector('.small-square-purple');
    let allDots = document.querySelectorAll('.littleDot');
    let titreDiapo = document.querySelector('.panneauCentre h3');
    let frameCircle = document.querySelector('#frameCircle');
    
    let panneauContent = document.getElementById('circleShow');
    let panneauMain = document.getElementById('main');
    let panneauLegend = document.querySelector('.zoneLegend');
    let messageBox = document.querySelector('.zoneLegend p');
    let panneauDots = document.querySelector('.dotRow');
    let sectionLegend = document.querySelector('.section-legend');
    let footer = document.querySelector('footer');
    let copyright = document.querySelector('.copyright');
    
    // déclarations tableaux - variables
    
    const chemin = "url('./assets/icons/";
    let sphereLogo,sphereDesktop,sphereBalloons,sphereJoystick,sphereP5,sphereTrello,sphereRigorous;
    let sphereOpen,sphereLaptop,sphereGreatIdeas,sphereLogotype,sphereThree,sphereFigma,sphereCurious;
    let sphereDevWeb,sphereTablet,sphere3dfriendly,spherePictures,sphereJavaScript,sphereVsCode,sphereDedicated;
    
    let messageArray = [
        'Hey , je suis Tarik, un brand new dev !',
        'Concevoir des sites et des applications qui s\'adaptent au périphérique de l\'utilisateur',
        'je donne vie à des projets originaux 365 jours/an',
        'je crée mes propres logos sur figma, contribuant ainsi à une expérience utilisateur unique',
        'Mes librairies de prédilection et le langage javascript',
        'Quelques-uns de mes outils favoris',
        'rigueur, soif d\'apprendre, implication !'
    ];
    
    let titreArray = [
        "à propos de moi",
        "responsive websites",
        "créativité",
        "design",
        "boîte à outils",
        "environnement",
        "qualités"
    ]
    
    let tableauLeft = [
        [sphereOpen,"./assets/spheres/sphere-open.svg"],
        [sphereLaptop,"./assets/spheres/sphere-laptop.svg"],
        [sphereGreatIdeas,"./assets/spheres/sphere-greatIdeas.svg"],
        [sphereJoystick,"./assets/spheres/sphere-joystick.svg"],
        [sphereThree,"./assets/spheres/sphere-threeJs.svg"],
        [sphereFigma,"./assets/spheres/sphere-figma.svg"],
        [sphereRigorous,"./assets/spheres/sphere-rigueur.svg"],
    ]
    
    let tableauImages = [
        [sphereLogo,"./assets/spheres/sphere-logo.svg"],
        [sphereDesktop,"./assets/spheres/sphere-desktop.svg"],
        [sphereBalloons,"./assets/spheres/sphere-balloon.svg"],
        [sphereLogotype,"./assets/spheres/sphere-logotype.svg"],
        [sphereP5,"./assets/spheres/sphere-p5.svg"],
        [sphereTrello,"./assets/spheres/sphere-trello.svg"],
        [sphereCurious,"./assets/spheres/sphere-curious.svg"]
    ];
    
    let tableauRight = [
        [sphereDevWeb,"./assets/spheres/sphere-dev-web.svg"],
        [sphereTablet,"./assets/spheres/sphere-tablet.svg"],
        [sphere3dfriendly,"./assets/spheres/sphere-3d-friendly.svg"],
        [spherePictures,"./assets/spheres/sphere-pictures.svg"],
        [sphereJavaScript,"./assets/spheres/sphere-javaScript.svg"],
        [sphereVsCode,"./assets/spheres/sphere-vscode.svg"],
        [sphereDedicated,"./assets/spheres/sphere-dedicated.svg"]
    ]
    
    
    
    let iconIndex = 0;
    let currentIndex = 0;
    let iconArray = ["-0px","-64px"];
    
    
    // init array spheres
    function fillArray(tableau){
        for (let i = 0; i < tableau.length; i++){
            tableau[i][0] = document.createElement('img');
            tableau[i][0].setAttribute('src',tableau[i][1]);
            tableau[i][0].classList.add('fadeIn');
            // console.log(tableau[i]);
        }
    }
    
    fillArray(tableauImages);
    fillArray(tableauLeft);
    fillArray(tableauRight);
        
    
    
    
    
    function initBigCircle(){
        // console.log(sphereLogo);
        bigCircle.append(tableauImages[0][0]);
        leftPanel.append(tableauLeft[0][0]);
        rightPanel.append(tableauRight[0][0]);
        titreDiapo.textContent = titreArray[currentIndex];
        messageBox.textContent = messageArray[currentIndex];
    }
    
    
    
    boutonSwitch.addEventListener("click",function(){
        parcours();
        frameCircle.style.transform += 'rotate(45deg)';
        bigCircle.style.transform += "rotate(-45deg)";
    })
    
    
    initBigCircle();
    
    
    
    function parcours(){
        if (currentIndex < tableauImages.length-1){
            tableauImages[currentIndex][0].remove();
            tableauLeft[currentIndex][0].remove();
            tableauRight[currentIndex][0].remove();
            allDots[currentIndex].classList.remove('active-dot');
            currentIndex++;
            bigCircle.append(tableauImages[currentIndex][0]);
            leftPanel.append(tableauLeft[currentIndex][0]);
            rightPanel.append(tableauRight[currentIndex][0]);
            tableauImages[currentIndex][0].classList.add('flipMe');
            allDots[currentIndex].classList.add('active-dot');
            messageBox.textContent = messageArray[currentIndex];
            titreDiapo.textContent = titreArray[currentIndex];
        }
        else{
            tableauImages[currentIndex][0].remove();
            tableauLeft[currentIndex][0].remove();
            tableauRight[currentIndex][0].remove();
            allDots[currentIndex].classList.remove('active-dot');
            currentIndex = 0;
            tableauImages[currentIndex][0].classList.add('flipMe');
            bigCircle.append(tableauImages[currentIndex][0]);
            leftPanel.append(tableauLeft[currentIndex][0]);
            rightPanel.append(tableauRight[currentIndex][0]);
            allDots[currentIndex].classList.add('active-dot');
            messageBox.textContent = messageArray[currentIndex];
            titreDiapo.textContent = titreArray[currentIndex];
        }
    }


    
    let cadreTestimonial = document.createElement('div');
    cadreTestimonial.classList.add('cadreTestimonial');
    let cadre1,cadre2,cadre3;
    let avatar1,avatar2,avatar3;
    let para1,para2,para3;
    let auteur1,auteur2,auteur3;
    let cadreArray = [cadre1,cadre2,cadre3];
    let cadreContent1 = [avatar1,avatar2,avatar3];
    let cadreContent2 = [para1,para2,para3];
    let cadreContent3 = [auteur1,auteur2,auteur3];
    let messageContents = [
        "Je recommande Tarik à toute entreprise désireuse de renforcer son équipe avec quelqu'un de sérieux et fiable : sa capacité à s’impliquer et à mener un travail de façon rigoureuse et structuré en fait un atout majeur.",
        "En plus de ses compétences techniques, Tarik a été extrêmement performant dans son apprentissage et dans les mises en pratiques confiés.  Son autonomie et sa remise en question ont été des éléments très remarqués et appréciés de ses formateurs. La pertinence et la justesse de ses propos sont également à souligner.",
        "Tarik a été recruté pour intégrer la formation DWWM sur une soixantaine de candidats pour 15 places. Il s'est montré à la hauteur : j'ai pu suivre sa progression tout au long de son parcours chez Human Booster. Sa soif de savoir et de connaissance l'ont fait progresser au-delà de nos espérances !"
    ];  
    let tableauAuteur = ['❝Aurélien❞','❝Yohan❞','❝Laetitia❞'];
    
    
    
    function creerPanneau(){
        for (let i = 0; i < cadreArray.length;i++){
            cadreArray[i] = document.createElement('div');
            cadreContent1[i] = document.createElement('div');
            cadreContent2[i] = document.createElement('p');
            cadreContent3[i] = document.createElement('div');
            cadreArray[i].classList.add('encadre');
            cadreContent1[i].classList.add('avatar');
            cadreContent2[i].classList.add('paragraphe');
            cadreContent3[i].classList.add('auteur');
            cadreArray[i].append(cadreContent1[i]);
            cadreArray[i].append(cadreContent2[i]);
            cadreArray[i].append(cadreContent3[i]);
            cadreTestimonial.append(cadreArray[i]);
            cadreContent2[i].textContent = messageContents[i];
            cadreContent3[i].textContent = tableauAuteur[i];
        }
    }
    
    creerPanneau();
    
    
    
    function switchContent(){
        if (iconIndex == 1){
            console.log("testimonials");
            titreDiapo.textContent = "testimonials";
            panneauContent.remove();
            panneauLegend.remove();
            panneauDots.remove();
            boutonSwitch.style.visibility = "hidden";
            sectionLegend.remove();
            panneauMain.append(cadreTestimonial);
        }
        else{
            cadreTestimonial.remove();
            titreDiapo.textContent = titreArray[currentIndex];
            boutonSwitch.style.visibility = "visible";
            panneauMain.append(panneauContent);
            panneauMain.append(sectionLegend);
            panneauMain.insertBefore(panneauContent,sectionLegend)
            sectionLegend.append(panneauLegend);
            footer.append(panneauDots);
            footer.insertBefore(panneauDots,copyright);
            
        }
    }
}

homePage();


// recuperation du mini carre -> faire un bouton d'info
let miniSquare1 = document.getElementById('about1');

let boutonInfo = document.createElement("button");
boutonInfo.classList.add("boutonInfo");
// boutonInfo.textContent = "about";
miniSquare1.append(boutonInfo);
let toggled = 0;

let bulleCarousel = document.createElement('div');
bulleCarousel.classList.add('bulle');
let textBulleHeading = document.createElement('h4');
textBulleHeading.textContent = "carousel simple en vanilla js";
let textBulleContent = document.createElement('p');
let messageA = "voici un carousel infini crée en vanilla javaScript";
let messageB = "j'ai commencé par créer les logos sur figma selon ma charte graphique et je les ai positionné 3 par 3";
let messageC = "j'ai crée 3 div en html et j'ai travaillé le css correspondant";
let messageD = "j'ai récupéré les éléments du DOM côté js, j'ai crée une fonction pour initialiser le carousel";
let messageE = "puis j'ai écrit une fonction switchContent() pour faire évoluer le carousel en fonction d'un index";
let messageF = "retrouvez le code de ce carousel sur mon github";

let allMessageArray = [messageA,messageB,messageC,messageD,messageE,messageF];
// bulleCarousel.append(textBulleHeading);
bulleCarousel.append(textBulleContent);
textBulleContent.textContent = allMessageArray[0];
let myInterval;

const initContentBulle = function() {
    let i = 1;
    myInterval = setInterval(() => {
        if(i < allMessageArray.length){
            textBulleContent.textContent = allMessageArray[i]
            console.log(i);
            i++;
        }
        else{
            clearInterval(myInterval);
            // $(bulleCarousel).hide("400");
        }
    },3000);

}   

$("#section2 .block-b").append(bulleCarousel);
$(bulleCarousel).hide();


const showBulle = () => {
    if(toggled == 1){
        clearInterval(myInterval);
        $(bulleCarousel).animate({width: 0}).slideUp("400");
        $(boutonInfo).css("background-image","url('./assets/icons/icon-info.svg')");
        textBulleContent.textContent = allMessageArray[0];
        toggled = 0;
    }
    else{
        $(bulleCarousel).animate({width: "80%"}).show("400");
        $(boutonInfo).css("background-image","url('./assets/icons/icon-cross.svg')");
        initContentBulle();
        toggled = 1;
    }
};


boutonInfo.addEventListener("click",showBulle);