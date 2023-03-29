const mobile_nav=document.querySelector(".mobileNavbarBtn");
const nav_header=document.querySelector(".header");

const toggleNavbar =()=>{
    nav_header.classList.toggle("action");
};
mobile_nav.addEventListener("click",()=>toggleNavbar());