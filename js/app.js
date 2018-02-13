document.addEventListener("DOMContentLoaded", function () { 
console.log("DOM fully loaded and parsed!");

//zadanie pierwsze
var btn1 = document.querySelector("li");

var subMenu = document.querySelector("li ul");
	
btn1.addEventListener("mouseover", function(){
	subMenu.classList.remove("hidden_menu");
});
	
btn1.addEventListener("mouseout", function(){	
	subMenu.classList.add("hidden_menu");
});

//zadanie drugie
var boxFirst = document.querySelector(".box_first");

boxFirst.addEventListener("mouseover", function(){
	firstP = document.querySelector(".box_first p");
		firstP.classList.add("hidden_menu");
	secondP = document.querySelector(".box_first .chair");
		secondP.classList.add("hidden_menu");
});
	
boxFirst.addEventListener("mouseout", function(){	
	firstP = document.querySelector(".box_first p");
		firstP.classList.remove("hidden_menu");
	secondP = document.querySelector(".box_first .chair");
		secondP.classList.remove("hidden_menu");		
});

var boxSecond = document.querySelector(".box_second");

boxSecond.addEventListener("mouseover", function(){
	firstP = document.querySelector(".box_second p");
		firstP.classList.add("hidden_menu");
	secondP = document.querySelector(".box_second .chair");
		secondP.classList.add("hidden_menu");
});
	
boxSecond.addEventListener("mouseout", function(){	
	firstP = document.querySelector(".box_second p");
		firstP.classList.remove("hidden_menu");
	secondP = document.querySelector(".box_second .chair");
		secondP.classList.remove("hidden_menu");		
});

//zadanie trzecie
var next = document.querySelector("#bgn_section1 .right");
var prev = document.querySelector("#bgn_section1 .left");
var slider = document.querySelectorAll(".slider div");

var currentIndex = 0;
	next.addEventListener("click", function(){
		slider[currentIndex].classList.remove("visible2");
		currentIndex++;

		if(currentIndex >= slider.length - 1){
			currentIndex = 0;}
		slider[currentIndex].classList.add("visible2");
});

	prev.addEventListener("click", function(){
		slider[currentIndex].classList.remove("visible2");
		currentIndex--;
		
		if(currentIndex < 0){
			currentIndex = slider.length -1;}
		slider[currentIndex].classList.add("visible2");
});

});