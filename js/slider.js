export default function slider(){

    const $contenedorSlider = document.querySelectorAll(".container-slider"),
          $btnNext = document.getElementById("next"),
          $btnPrev = document.getElementById("prev");
    let contador = 0;      

    //console.log($contenedorSlider, $btnNext, $btnPrev);  

    const next = ()=>{
        $contenedorSlider[contador].classList.remove("is-active");
            contador++;                    

            if(contador > $contenedorSlider.length - 1){
                contador = 0;                               
            }
            $contenedorSlider[contador].classList.add("is-active");
    }

    const prev = ()=>{
        $contenedorSlider[contador].classList.remove("is-active");
            contador--;

            if(contador < 0) contador = $contenedorSlider.length -1 ;                 
                        
            $contenedorSlider[contador].classList.add("is-active");   
    }
    
    document.addEventListener("click", (e)=>{        
               
        if(e.target === $btnNext){            
            e.preventDefault();
            next();            
        }

        if(e.target === $btnPrev){
            e.preventDefault();   
            prev();                     
        }
    })

    setInterval(() => {
        next();
    }, 5000);
}