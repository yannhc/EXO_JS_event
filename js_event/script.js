// FONCTION 1
let footerElts = document.getElementsByTagName("footer");
let count = 1;
function footerMessage() {
	console.log(`clic numéro ${count}`);
	count ++;
}
footerElts[0].addEventListener("click", footerMessage);

// FONCTION 2
let navbarToggleElts = document.getElementsByClassName("navbar-toggler");
function showMenu() {
	let navbarHeader = document.getElementById("navbarHeader");
	navbarHeader.classList.toggle("collapse");
}
navbarToggleElts[0].addEventListener("click", showMenu);

// FONCTION 3
let firstCardElt = document.getElementsByClassName("card")[0];
let firstCardButtonElts = firstCardElt.getElementsByTagName("button");
function cardTextRed(){ 
	firstCardElt.style.color = "red";
}
firstCardButtonElts[1].addEventListener("click", cardTextRed);

// FONCTION 4
let secondCardElt = document.getElementsByClassName("card")[1];
let secondCardButtonElts = secondCardElt.getElementsByTagName("button");
let textColorStatus = false;
function cardTextGreen(){
	if (secondCardElt.style.color === "green") {
		secondCardElt.style.color = "";
	}
	else {
		secondCardElt.style.color = "green";
	}
}
secondCardButtonElts[1].addEventListener("click", cardTextGreen);

//FONCTION 5
let navBarElt = document.getElementsByClassName("navbar")[0];
let linkBootstrapElt = document.getElementsByTagName("link")[0];
function disableBootstrap() {
	if (linkBootstrapElt.disabled === false) {
		linkBootstrapElt.disabled = true;
	}
	else {
		linkBootstrapElt.disabled = false;
	}
}
navBarElt.addEventListener("dblclick", disableBootstrap);

// FONCTION 6
let cardElmts = document.getElementsByClassName("card");
for (let count = 0; count < cardElmts.length; count++) {
	let cardText = cardElmts[count].getElementsByClassName("card-text")[0];
	let cardImage = cardElmts[count].getElementsByClassName("card-img-top")[0];
	let cardButtonView = cardElmts[count].getElementsByTagName("button")[0];
	function tinyCard() {
		if (cardImage.style.width === "20%") {
			cardImage.style = "";
			cardText.classList.toggle("collapse");
		}
		else {
			cardImage.style.width = "20%";
			cardText.classList.toggle("collapse");
		}
	}
	cardButtonView.addEventListener("mouseover", tinyCard);
}

// FONCTION 7
let navCardButton1 = document.getElementsByClassName("my-2")[1];
let parentNodeCards = document.getElementsByClassName("row")[1];
function lastCardGetsFirst() {
	parentNodeCards.insertBefore(parentNodeCards.children[5], parentNodeCards.children[0]);
}
navCardButton1.addEventListener("click", lastCardGetsFirst);

// FONCTION 8
let navCardButton2 = document.getElementsByClassName("my-2")[0];
function firstCardGetsLast(e) {
	e.preventDefault();
	parentNodeCards.insertBefore(parentNodeCards.children[0], parentNodeCards.children[5].nextSibling);
}
navCardButton2.addEventListener("click", firstCardGetsLast);
