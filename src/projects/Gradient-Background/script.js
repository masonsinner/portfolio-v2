var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, "
	 + color1.value
	  + ", " 
	  + color2.value
	   + ")";

	   css.textContent = body.style.background + ";";
}

// function randomGradient(){
// 	body.style.background =
// 	"linear-gradient(to right, "
// 	 + color1.value === Math.floor(Math.random() * max) + 1;
// 	  + ", " 
// 	  + color2.value === Math.floor(Math.random() * max) +1;
// 	   + ")";
// }

// function get_random_color2() 
// {
//     function() { return Math.floor(Math.random()*256) };
//     return "rgb(" + r() + "," + r() + "," + r() + ")";
// S}

// function get_random_color1() 
// {
// 	function(){ return Math.floor(Math.random()*256) };
//     return "rgb(" + r() + "," + r() + "," + r() + ")";
// }

function randomGradient() {
	color1.value = get_random_color1;
	color2.value = get_random_color2; 

	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", "
	+ color2.value
	+ ")"; 
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomGradient);