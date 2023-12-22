/*=============== TABLEAU D'IMAGES ===============*/
const slides = [
    {
        image: "slide1.jpg",
        tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.jpg",
        tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];

/*=============== VARIABLES ===============*/
//#region

	/* Sélectionne l'élément du DOM avec la classe "dots" et le stocke dans la variable dotsContainer */
	const dotsContainer = document.querySelector(".dots");

	/* Sélectionne les éléments du DOM avec les classes "arrow_right" et "arrow_left" 
	et les stocke dans les variables arrowRight et arrowLeft */
	const arrowRight = document.querySelector(".arrow_right");
	const arrowLeft = document.querySelector(".arrow_left");

	/* Sélectionne les éléments du DOM ayant les classes 
	"banner-img" et "#banner p" et les stocke dans les variables img et tagLine */
	const img = document.querySelector(".banner-img");
	const tagLine = document.querySelector("#banner p");

	/* Initialise l'index à 0, représentant la position actuelle dans le carrousel. */
	let index = 0;

//#endregion

/*=============== BULLET POINTS ===============*/
	/* Fonction pour créer un bullet point dans le carrousel */
	function createDot(i) {

		/* Crée un élément div dans le DOM et lui ajoute la classe "dot" */
		const dot = document.createElement("div");
		dot.classList.add("dot");

		/* Ajoute le bullet point au conteneur de points (dotsContainer) */
		dotsContainer.appendChild(dot);

		/* Ajoute un Event Listener au clic sur le bullet point, 
		appelant la fonction updateCarousel avec l'index du bullet point en argument */
		dot.addEventListener("click", () => {
			updateCarousel(i);
		});

		/* CONDITION : si le bullet point créé correspond à l'index actuel du carrousel, 
		ajoute la classe "dot_selected" afin qui soit en surbrillance. */
		if (i === index) {
			dot.classList.add("dot_selected");
		}
	}

	/* Fonction permettant d'afficher les bullet points du carrousel */
	function displayDots() {

		/* Parcours tous les slides et crée un bullet point pour chaque image */
		for (let i = 0; i < slides.length; i++) {
			createDot(i);
		}
	}

/*=============== CARROUSEL ===============*/
	/* Fonction permettant de mettre à jour le carrousel avec l'image 
	et le texte correspondant à un index donné */
	function updateCarousel(i) {
		
		/* Sélectionne tous les bullet points du carrousel */
		const selectDots = document.querySelectorAll(".dots .dot");

		/* Retire la classe "dot_selected" du point actuel */
		selectDots[index].classList.remove("dot_selected");

		/* Mise à jour de l'index actuel */
		index = i;

		/* Met à jour l'image et le texte du carrousel en fonction du nouvel index */
		img.src = "./assets/images/slideshow/" + slides[index].image;
		tagLine.innerHTML = slides[index].tagLine;

		/* Ajoute la classe "dot_selected" au nouveau bullet point */
		selectDots[index].classList.add("dot_selected");
	}

	/* Fonction permettant d'effectuer le défilement du carrousel vers la droite 
	ou la gauche dans la direction choisi */
	function slide(direction) {

		/* Sélectionne tous les points du carrousel */
		const selectDots = document.querySelectorAll(".dots .dot");

		/* Retire la classe "dot_selected" du bullet point actuel */
		selectDots[index].classList.remove("dot_selected");

		/*  Met à jour l'index en fonction de la direction */
		if (direction === "right") {
			index = (index + 1) % slides.length;
		} else {
			index = (index - 1 + slides.length) % slides.length;
		}

		/* Met à jour l'image et le texte du carrousel en fonction du nouvel index. */
		img.src = "./assets/images/slideshow/" + slides[index].image;
		tagLine.innerHTML = slides[index].tagLine;

		/* Ajoute la classe "dot_selected" au nouveau bullet point */
		selectDots[index].classList.add("dot_selected");
	}

/*=============== INTERACTION & AUTOMATISATION ===============*/
	let autoSlideInterval;

	function slideRight() {
		slide("right");
	}

	function slideLeft() {
		slide("left");
	}

	/* Fonction permettant d'effectuer un défilement automatique vers la droite 
	à intervalles régulière */
	function autoSlide() {
		/* setInterval permet d'appeler la fonction slideRight toutes les X millisecondes */
		autoSlideInterval = setInterval(() => {
			slideRight();
		}, 3000); /* 3000 millisecondes = 3 secondes */
	}

	/* Ajout des Event Listeners aux flèches pour un défilement manuel */
	arrowRight.addEventListener("click", slideRight);
	arrowLeft.addEventListener("click", slideLeft);

	/* Ajoute un Event Listener pour arrêter le défilement automatique 
	lorsqu'une interaction utilisateur est détectée */
	dotsContainer.addEventListener("click", () => {
		clearInterval(autoSlideInterval);
		autoSlide();
	});

	/* Fonction utilisée pour précharger les images du carrousel. */
	function preloadImages() {
		for (let i = 0; i < slides.length; i++) {
			const imageObj = new Image();
			imageObj.src = "./assets/images/slideshow/" + slides[i].image;
    }
}

/*=============== APPEL DE FONCTIONS ===============*/
	/* Démarrage du préchargement d'images */
	preloadImages();

	/* Démarrage du défilement automatique */
	autoSlide();

	/* Affichage des bullet points du carrousel */
	displayDots();