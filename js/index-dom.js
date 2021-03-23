import menuHamburguer from "./menuHamburguer.js";
import menuTab from "./menuTab.js";
import slider from "./slider.js";
import validacionForm from "./validacionForm.js";


document.addEventListener("DOMContentLoaded", (e)=>{  
    console.log("Hola soy matías xD");  
    menuHamburguer("#btn-menu", ".menu", ".menu a");
    menuTab();
    slider();
    validacionForm();
})