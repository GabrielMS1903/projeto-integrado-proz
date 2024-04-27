document.addEventListener("DOMContentLoaded", function() {
    const bodyD = document.body
    const buttonPress = document.getElementById("btnND");
    const footer = document.getElementById("footerId");
    const footerP = document.querySelectorAll("#footerId p");
    let isDarkTheme = false;
    console.log(bodyD)

    function change() {
        buttonPress.addEventListener("click", () => {
          

    
            
        })
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

                footer.classList.toggle("gitFooter", isDarkTheme);
              

                bodyD.classList.toggle("isBlack")

                
    
                Array.from(footerP).forEach(element => {
                    element.classList.toggle("footerLetra", isDarkTheme);
                });
    
               
                
        });
    
        buttonPress.addEventListener("mouseenter", () => {
            if(!isDarkTheme) {
                buttonPress.classList.add("toggleButtonD")
            }else {
                buttonPress.classList.add("toggleOtherD")
            }
            
            
        })
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

    

})