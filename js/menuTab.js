export default function menuTab(){

    const $btnServicio = document.getElementById("btn-servicios"),
          $btnHorario = document.getElementById("btn-horarios"),
          $btnDetalle = document.getElementById("btn-detalle");

          //console.log($btnServicio);

          document.addEventListener("click", (e)=>{

            if(e.target === $btnServicio){
                console.log("servicio");

                document.getElementById("servicio").classList.add("is-active");
                document.getElementById("horario").classList.remove("is-active");
                document.getElementById("detalle").classList.remove("is-active");
            }

            if(e.target === $btnHorario){
                
                document.getElementById("servicio").classList.remove("is-active");
                document.getElementById("horario").classList.add("is-active");
                document.getElementById("detalle").classList.remove("is-active");
            }

            if(e.target === $btnDetalle){
                
                document.getElementById("servicio").classList.remove("is-active");
                document.getElementById("horario").classList.remove("is-active");
                document.getElementById("detalle").classList.add("is-active");
            }
          })
}