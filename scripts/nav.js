let header = document.querySelector("#header");
let overlay = document.querySelector("#overlap");
let sidenav = document.querySelector("#sidenav");

function closeOvr() {
	overlay.style.display = "none";
	sidenav.style.left = "-480px";
    console.log('works')
}

function openNav() {
	overlay.style.display = "block";
	overlay.style.marginTop = "0";
	sidenav.style.left = "0";
}

function closeNav() {
	overlay.style.display = "none";
	sidenav.style.left = "-400px";
}

function s() {
	overlay.style.display = "block";
	overlay.style.marginTop = "84.1px";
}
