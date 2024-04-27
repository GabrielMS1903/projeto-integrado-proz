document.addEventListener("DOMContentLoaded", () => {

    const buttonPress = document.getElementById("btnN");
    const body = document.getElementsByTagName("body")[0];
    const footer = document.getElementById("footerId");
    const footerP = document.querySelectorAll("#footerId p");
    const cadForm = document.getElementById("cadForm")
    let isDarkTheme = false;

    function themeLogin() {
        const themeClass = isDarkTheme ? "black" : "white";
        
    
        Array.from(footerP).forEach(element => {
            element.classList.toggle("footerLetra", isDarkTheme);
        });
    
        buttonPress.addEventListener("click", () => {
            isDarkTheme = !isDarkTheme; // Alternar entre escuro e claro ao clicar no botão
    
            
    
            body.classList.toggle("bodyBlack", isDarkTheme);
    
           
    
            Array.from(footerP).forEach(element => {
                element.classList.toggle("footerLetra", isDarkTheme);
            });
    
            footer.classList.toggle("gitFooter", isDarkTheme);
            cadForm.classList.toggle("cadF", isDarkTheme);
        });
    }

    function toggleBtn()  {

            
        buttonPress.addEventListener("click", () => {
            isDarkTheme = !isDarkTheme
            if(!isDarkTheme) {
                buttonPress.innerText ="Tema Claro"
                buttonPress.classList.remove("changeBtn")
                }else {
                buttonPress.innerText ="Tema Escuro"
                buttonPress.classList.add("changeBtn")
                }
    
               
                themeLogin()
                
        });
    
        buttonPress.addEventListener("mouseenter", () => {
            if(!isDarkTheme) {
                buttonPress.classList.add("toggleButton")
            }else {
                buttonPress.classList.add("toggleOther")
            }
            
            
        })
    }
    
    //checar a tela para não ter troca de tema
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

})