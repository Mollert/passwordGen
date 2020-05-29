
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "m", "p", "r", "s", "t", "v", "x", "y", "z"];

const numbers = ["2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["@", "#", "$", "%", "^", "&", "*", "<", ">", "?"];

//  Get array of the element with class of quantities
let quantities = document.getElementsByClassName("quantities");
//  Lopp through the array
for (let i = 0 ; i < quantities.length ; i++) {
//  Stop at the element that was clicked
	quantities[i].addEventListener("click", (event) => {
//      Remove hover styles from any that where previously picked		
		for (let j = 0 ; j < quantities.length ; j++) {
			quantities[j].style.fontFamily = "Libr";
			quantities[j].style.color = "black";
			quantities[j].style.borderColor = "lightsteelblue";
		}
//		Add the hover styles to the one that was picked
		document.getElementById(event.target.id).style.fontFamily = "Libb";
		document.getElementById(event.target.id).style.color = "firebrick";
		document.getElementById(event.target.id).style.borderColor = "black";
});
}

//  Get array of the element with class of quantities
let mixture = document.getElementsByClassName("mixture");
//  Lopp through the array
for (let i = 0 ; i < mixture.length ; i++) {
//  Stop at the element that was clicked
	mixture[i].addEventListener("click", (event) => {
//      Remove hover styles from any that where previously picked		
		for (let j = 0 ; j < mixture.length ; j++) {
			quantities[j].style.fontFamily = "Libr";
			quantities[j].style.color = "black";
			quantities[j].style.textDecorationLine = "none";
		}
//		Add the hover styles to the one that was picked
		document.getElementById(event.target.id).style.fontFamily = "Libb";
		document.getElementById(event.target.id).style.color = "firebrick";
		document.getElementById(event.target.id).style.textDecorationLine = "underline";
		document.getElementById(event.target.id).style.textDecorationColor = "black";
		document.getElementById(event.target.id).style.textDecorationStyle = "solid";		
});
}
