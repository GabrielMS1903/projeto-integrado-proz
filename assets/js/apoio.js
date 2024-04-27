document.addEventListener("DOMContentLoaded", function() {
    const body = document.getElementsByTagName("body")[0]
    const buttonPress = document.getElementById("btnN")
    const footerP = document.querySelectorAll("#footerId p");
    const footer = document.getElementById("footerId");
    console.log(body)
    let isDarkTheme = false 

    function apoie() {
        body.classList.toggle("bodyChange", isDarkTheme);

        Array.from(footerP).forEach(element => {
            element.classList.toggle("footerLetra", isDarkTheme);
        });

        footer.classList.toggle("gitFooter", isDarkTheme);
    }
    

    function toggleBtn() {
        buttonPress.addEventListener("click", () => {
            isDarkTheme = !isDarkTheme;
            if (!isDarkTheme) {
                buttonPress.innerText = "Tema Claro";
                buttonPress.classList.remove("changeBtn");
            } else {
                buttonPress.innerText = "Tema Escuro";
                buttonPress.classList.add("changeBtn");
            }
            apoie();
        });

        buttonPress.addEventListener("mouseenter", () => {
            if (!isDarkTheme) {
                buttonPress.classList.add("toggleButton");
            } else {
                buttonPress.classList.add("toggleOther");
            }
        });
    }

    function checkScreen() {
        const width = window.innerWidth
        const height = window.innerHeight
    
        if( width !== 400 && height !== 700){
            
            buttonPress.style.display = "block";
            toggleBtn();
        } else {
            buttonPress.style.display = "none";
        }
    }
    
    
    window.addEventListener("load", checkScreen)
    
    window.addEventListener("resize", checkScreen)


    const main = document.getElementById("main_container")
    console.log(main)

    main.addEventListener("mouseenter", () => {
        main.classList.add("anima-main")
    })
})