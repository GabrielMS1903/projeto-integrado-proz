document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById("nav")
    nav.addEventListener("mouseenter", () => {
        
        nav.style.backgroundImage = "linear-gradient(to bottom right,#E9DBC1, #2E7F57"
        
    })

    nav.addEventListener("mouseleave", () => {
        
        
        nav.style.backgroundColor = "#43604F"
        
        nav.style.backgroundImage = ""
    })
    

    //footer
    
   const align = document.querySelectorAll("#alignGit a img")
   align.forEach((img, index) => {
    const link = img.parentNode; // Obtendo o elemento pai (o elemento <a>)

    // Evento mouseenter para os elementos de imagem
    img.addEventListener("mouseenter", () => {
        if (index === 3) {
            link.innerHTML = `<a target="_blank" href="https://github.com/rasecprogram">Augusto</a>`;
        } else if (index === 2) {
            link.innerHTML = `<a target="_blank" href="https://github.com/Abel-D-Silva">Abel</a>`;
        } else if (index === 1) {
            link.innerHTML = `<a target="_blank" href="https://github.com/GabrielMS1903">Gabriel</a>`;
        } else {
            link.innerHTML = `<a target="_blank" href="https://github.com/Ailton-Nascimento">Ailton</a>`;
        }

        link.style.fontSize = "15px";
        link.style.fontWeight = "bold";
        link.style.marginLeft = "30px";
        link.style.marginRight = "20px";
        link.classList.add("git");
    });

    // Evento mouseleave para os elementos de imagem
    img.addEventListener("mouseleave", () => {
        if (index === 3) {
            link.innerHTML = `<a target="_blank" href="https://github.com/rasecprogram">Augusto</a>`;
        } else if (index === 2) {
            link.innerHTML = `<a target="_blank" href="https://github.com/Abel-D-Silva">Abel</a>`;
        } else if (index === 1) {
            link.innerHTML = `<a target="_blank" href="https://github.com/GabrielMS1903">Gabriel</a>`;
        } else {
            link.innerHTML = `<a target="_blank" href="https://github.com/Ailton-Nascimento">Ailton</a>`;
        }
       

        link.style.fontSize = "";
        link.style.fontWeight = "";
        link.style.marginLeft = "";
        link.style.marginRight = "";
        link.classList.remove("git");
    });
});
   
})