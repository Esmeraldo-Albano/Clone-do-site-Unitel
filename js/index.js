
let img = document.getElementById('cardd');

var intervalo = 19000;

function slide1(){
	img.setAttribute("src","assets/card-1.jpeg");
	setTimeout(slide2,intervalo);
}

function slide2(){
	img.setAttribute("src","assets/card-2.jpeg");
	setTimeout(slide1,intervalo)
}