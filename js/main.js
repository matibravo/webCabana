let links = document.querySelectorAll(".menu-screen a");

links.forEach(link =>{
    link.addEventListener('click', function(ev){
        document.querySelector(".menu-screen").classList.remove("active");
    })
})


document.querySelector(".menu").addEventListener("click", ()=>{
    document.querySelector(".menu-screen").classList.add("active");
})






