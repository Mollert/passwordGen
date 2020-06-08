
const lowercases = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "p", "r", "s", "t", "v", "x", "y", "z"];
const uppercases = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "P", "R", "S", "T", "V", "X", "Y", "Z"];
const numbers = ["2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["@", "#", "$", "%", "^", "&", "*", "<", ">", "?"];

let quantities = "";
let quantId = "";
let quantNum = 0;
let mixture = "";
let mixtureId = "";
let mixtureGroup = {
	uppercase: false,
	number: false,
	symbol: false
}
let mixtureOption = [];
let whichMixtureNum = 0;
let whichMixture = "";
let useNumber = 0;
let passwordElement = "";
let thePassword = "";


const getRandom = (n) => {
	return Math.floor(Math.random() * n);
}


//  Get array of the numbered elements with class of quantity
quantities = document.getElementsByClassName("quantity");
//  Loop through the array
for (let i = 0 ; i < quantities.length ; i++) {
//  Stop at the element that was clicked
	quantities[i].addEventListener("click", (event) => {
//      Remove hover styles from any that where previously picked		
		for (let j = 0 ; j < quantities.length ; j++) {
			quantities[j].style.fontFamily = "Libr";
			quantities[j].style.color = "black";
			quantities[j].style.borderColor = "lightsteelblue";
		}
		quantId = event.target.id;
//		Add the hover styles to the one that was picked using id to identify
		document.getElementById(quantId).style.fontFamily = "Libb";
		document.getElementById(quantId).style.color = "firebrick";
		document.getElementById(quantId).style.borderColor = "black";
	});
}

//  Get array of the element types with class of aMix
mixture = document.getElementsByClassName("aMix");
//  Loop through the array
for (let i = 0 ; i < mixture.length ; i++) {
//  Stop at the element that was clicked
	mixture[i].addEventListener("click", (event) => {
//		Get id of element that was clidked
		mixtureId = event.target.id;
//		Checking to see the status of the element that was picked
//		If it was picked, return style to original if not picked, add picked styles
		if (mixtureGroup[mixtureId]) {
			mixture[i].style.fontFamily = "Libr";
			mixture[i].style.color = "black";
			mixture[i].style.textDecorationLine = "none";

			mixtureGroup[mixtureId] = false;
		} else {
			document.getElementById(mixtureId).style.fontFamily = "Libb";
			document.getElementById(mixtureId).style.color = "firebrick";
			document.getElementById(mixtureId).style.textDecorationLine = "underline";
			document.getElementById(mixtureId).style.textDecorationColor = "black";
			document.getElementById(mixtureId).style.textDecorationStyle = "solid";

			mixtureGroup[mixtureId] = true;
		}
	});
}

//  When the button to get the password is picked
document.getElementById("sendPreferences").addEventListener("click", () => {

	mixtureOption = ["lowercase"];
//	Loads up the array of the chosen types for password
	for (const item in mixtureGroup) {
		if (mixtureGroup[item]) {
			mixtureOption.push(item);
		}
	}
//	Using the id of the chosen number
	quantNum = document.getElementById(quantId).textContent;
//	Creae the password with this for loop
	for (let i = 0 ; i < quantNum ; i++) {

		whichMixtureNum = 0;
		whichMixture = "";
		useNumber = 0;		
		passwordElement = "";
//		Pick a random type from the array
		whichMixtureNum = getRandom(mixtureOption.length);
		whichMixture = mixtureOption[whichMixtureNum];
//		With that type, get a random element from an array
		switch (whichMixture) {
			case "lowercase":
				useNumber = getRandom(18);
				passwordElement = lowercases[useNumber];				
				break;
			case "uppercase":
				useNumber = getRandom(18);
				passwordElement = uppercases[useNumber];
				break;
			case "number":
				useNumber = getRandom(8);
				passwordElement = numbers[useNumber];
				break;
			case "symbol":
				useNumber = getRandom(10);
				passwordElement = symbols[useNumber];				
				break;
			default:
				break;
		}
//		Load up the array
		thePassword += passwordElement;
	}
//	Display the password area with clear button
	document.getElementById("showThenClear").style.display = "block";
	document.getElementById("password").textContent = thePassword;

	thePassword = "";
});

//  This clears the chocies and hides the password area and clear button
document.getElementById("clearButton").addEventListener("click", () => {

	document.getElementById("showThenClear").style.display = "none";

	document.getElementById(quantId).style.fontFamily = "Libr";
	document.getElementById(quantId).style.color = "black";
	document.getElementById(quantId).style.borderColor = "lightsteelblue";

	for (let i = 1 ; i < mixtureOption.length ; i++) {
		document.getElementById(mixtureOption[i]).style.fontFamily = "Libr";
		document.getElementById(mixtureOption[i]).style.color = "black";
		document.getElementById(mixtureOption[i]).style.textDecorationLine = "none";
	}
});