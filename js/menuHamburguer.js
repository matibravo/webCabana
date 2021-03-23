export default function menuHamburguer($btn, $menu, $menuLink){

    document.addEventListener("click", (e)=>{

        if(e.target.matches($btn) || e.target.matches(`${$btn} *`)){           
            document.querySelector($btn).classList.toggle("is-active");
            document.querySelector($menu).classList.toggle("ocultar");            
        }

        if(e.target.matches($menuLink)){              
            document.querySelector($menu).classList.add("ocultar");
            document.querySelector($btn).classList.remove("is-active");
        }
    })    

}