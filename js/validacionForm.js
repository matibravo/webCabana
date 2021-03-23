export default function validacionForm(){
    
    const $formulario = document.getElementById("formContact"),
          $inputs = document.querySelectorAll("#formContact [required]");

          $inputs.forEach((el)=>{

            const $span = document.createElement("span");

            $span.id = el.name;
            $span.textContent = el.title;
            $span.classList.add("spanError", "none");
            el.insertAdjacentElement("afterend", $span);

          });
    
    document.addEventListener("keyup", e=>{

        if(e.target.matches("#formContact [required]")){
            //console.log(e.target.value);
            let pattern = e.target.pattern || e.target.dataset.pattern;

            if(pattern && e.target.value !== ""){

                let regExp = new RegExp(pattern);

                return  (!regExp.exec(e.target.value))
                        ? document.getElementById(e.target.name).classList.add("is-active")
                        : document.getElementById(e.target.name).classList.remove("is-active");
            }

            if(!pattern){
                return (e.target.value ==="")
                       ? document.getElementById(e.target.name).classList.add("is-active")
                       : document.getElementById(e.target.name).classList.remove("is-active");
            }
        }
    });

    document.addEventListener("submit", e=>{

        e.preventDefault();

        const $loader = document.querySelector(".contact-form-loader"),
              $respuesta = document.querySelector(".respuesta");

        $loader.classList.remove("none");
        
        fetch("https://formsubmit.co/ajax/mati.bravo7@gmail.com", {
            method: "POST",
            body: new FormData(e.target)
        })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then( json =>{
            console.log(json);
            $loader.classList.add("none");
            $respuesta.classList.remove("none");
            $formulario.reset();            
        })
        .catch(err =>{
            console.log(err);
            let mensaje = err.statusText || "Ocurrio un error, intenta nuevamente";
            $respuesta.innerHTML = `<p>Error: ${err.status} - ${mensaje}</p>`;
        })
        .finally(()=>{
            setTimeout(() => {
                $respuesta.innerHTML = "";      
            }, 3000);
        });
    })
};

