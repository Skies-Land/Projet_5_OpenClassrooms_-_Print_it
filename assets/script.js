/*=============== TABLEAU D'IMAGES ===============*/
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
];

/*=============== VARIABLES ===============*/
	/* Bullets points */
	const dots = document.querySelector(".dots");

	/* Flèche de navigation du slider */
	const arrowRight = document.querySelector(".fa-arrow-right");
	const arrowLeft = document.querySelector(".fa-arrow-left");

	/* Selection des images et des textes à afficher */
	const img = document.querySelector(".banner-img");
	const tagLine = document.querySelector("#banner p");


	let index = 0;


/*=============== FONCTION PRINCIPALE ===============*/
function main() {
	displayDots();
	slideRight();
	slideLeft();
}
main();

/*=============== AFFICHAGE DES DOTS ===============*/
function displayDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		if (i == index) {
			/* ⬇ change la couleur du "dot" avec la class CSS
			".dot_selected" concernant la slide sélectionné */
			dot.classList.add("dot_selected");
		}
	}
}

/*=============== EVENT LISTENER ===============*/
	/*=============== SLIDE AU CLIQUE DROIT ===============*/
	function slideRight(){
		arrowRight.addEventListener("click", () => {
			
			/* Initialise un tableau de dots */
			const selectDots = document.querySelectorAll(".dots .dot");
			
			/* Dans le tableau "selectDots" prendre l'index actuelle
			et enlève la class CSS ".dot_selected" */
			selectDots[index].classList.remove("dot_selected");
			
			index++;

			/* ⬇ La condition, si la valeur du tableau "slides" est supérieur à 4
			alors le carrousel d'image repart à zéro */
			if (index > slides.length - 1) {
				index = 0;
			}

			/* changement d'image au déroulement du slider */
			img.src = "./assets/images/slideshow/" + slides[index].image;

			/* changement le texte au déroulement du slider */
			tagLine.innerHTML = slides[index].tagLine;

			/* Dans le tableau "selectDots" prendre l'index actuelle
			et ajoute la class CSS ".dot_selected" */
			selectDots[index].classList.add("dot_selected");
		});
	}
	

	/*=============== SLIDE AU CLIQUE GAUCHE ===============*/
	function slideLeft(){
		arrowLeft.addEventListener("click", () => {
			
			/* Initialise un tableau de dots */
			const selectDots = document.querySelectorAll(".dots .dot");
			
			/* Dans le tableau "selectDots" prendre l'index actuelle
			et enlève la class CSS ".dot_selected" */
			selectDots[index].classList.remove("dot_selected");
			
			index--;

			/* ⬇ La condition, si la valeur du tableau "slides" est égale à 0
			alors le carrousel d'image repart à l'image précédente */
			if (index < 0) {
				index = slides.length - 1;
			}

			/* changement d'image au déroulement du slider */
			img.src = "./assets/images/slideshow/" + slides[index].image;

			/* changement le texte au déroulement du slider */
			tagLine.innerHTML = slides[index].tagLine;

			/* Dans le tableau "selectDots" prendre l'index actuelle
			et ajoute la class CSS ".dot_selected" */
			selectDots[index].classList.add("dot_selected");
		});
	}