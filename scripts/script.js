const sidenav = document.querySelector('#sidenav');
const overlap = document.querySelector('#overlap');

function openNav() {
    overlap.style.display= "block";
    sidenav.style.left= "0";
    console.log("works");
};

function closeNav() {
    overlap.style.display= "none";
    sidenav.style.left= "-400px";
    console.log("works");
};