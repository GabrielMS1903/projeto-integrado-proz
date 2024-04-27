document.addEventListener("DOMContentLoaded", function() {
    const buttonPress = document.getElementById("btnN");
    const loginContainer = document.getElementById("login-container");
   // const lab = document.getElementsByClassName("lab");
    //const title = document.querySelectorAll("#login-container h1");
    const body = document.getElementsByTagName("body")[0];
    //const check = document.getElementsByClassName("check");
    //const cadastreSe = document.querySelectorAll("#cadastre p");
    //const cadastreA = document.querySelectorAll("#cadastre p a");
    const footer = document.getElementById("footerId");
    const footerP = document.querySelectorAll("#footerId p");
    const cadForm = document.getElementById("cadForm")
    let isDarkTheme = false;

    

function themeLogin() {
    const themeClass = isDarkTheme ? "black" : "white";
    /*
    Array.from(lab).forEach(element => {
        element.classList.toggle("blackOther", isDarkTheme);
    });

    Array.from(title).forEach(element => {
        element.classList.toggle("titleH", isDarkTheme);
    });

    Array.from(cadastreSe).forEach(element => {
        element.classList.toggle("blackOther", isDarkTheme);
    });

    Array.from(cadastreA).forEach(element => {
        element.classList.toggle("blackA", isDarkTheme);
    });
    */

    //Array.from(check).forEach(element => {
      //  element.classList.toggle("checkBlack", isDarkTheme);
   // });

    Array.from(footerP).forEach(element => {
        element.classList.toggle("footerLetra", isDarkTheme);
    });

    buttonPress.addEventListener("click", () => {
        isDarkTheme = !isDarkTheme; // Alternar entre escuro e claro ao clicar no botão

        /*
        Array.from(lab).forEach(element => {
            element.classList.toggle("blackOther", isDarkTheme);
        });

        Array.from(title).forEach(element => {
            element.classList.toggle("titleH", isDarkTheme);
        });

        Array.from(cadastreSe).forEach(element => {
            element.classList.toggle("blackP", isDarkTheme);
        });

        Array.from(cadastreA).forEach(element => {
            element.classList.toggle("blackA", isDarkTheme);
        });
        */

        body.classList.toggle("bodyBlack", isDarkTheme);

        //Array.from(check).forEach(element => {
            //element.classList.toggle("checkBlack", isDarkTheme);
       // });

        Array.from(footerP).forEach(element => {
            element.classList.toggle("footerLetra", isDarkTheme);
        });

        footer.classList.toggle("gitFooter", isDarkTheme);
        cadForm.classList.toggle("cadF", isDarkTheme);
    });
}



const cardPDie = document.querySelectorAll(".cards .card p")
const focus = document.querySelectorAll("#about .focus")
    function hometheme() {
       
        Array.from(focus).forEach(element => {
            element.classList.toggle("focusBlack", isDarkTheme);
        });

        Array.from(cardPDie).forEach(element => {
            element.classList.toggle("cardWhite", isDarkTheme );
        });


        Array.from(footerP).forEach(element => {
            element.classList.toggle("footerLetra", isDarkTheme );
        });
    
        buttonPress.addEventListener("click", () => {
            isDarkTheme = !isDarkTheme; // Alternar entre escuro e claro ao clicar no botão
            Array.from(focus).forEach(element => {
                element.classList.toggle("focusBlack", isDarkTheme);
            });
            
            bodyHome.classList.toggle("changeBody", isDarkTheme);
            footer.classList.toggle("gitFooter", isDarkTheme);

            Array.from(cardPDie).forEach(element => {
                element.classList.toggle("cardWhite", isDarkTheme);
            });

            Array.from(footerP).forEach(element => {
                element.classList.toggle("footerLetra", isDarkTheme);
            });
        });
    }

    
    //sua saude

    

    function cadastre() {
        
            buttonPress.addEventListener("click", () => {
            isDarkTheme = !isDarkTheme
            body.classList.toggle("bodyBlack", isDarkTheme)

            
        })
    }

    //função botao

   

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
                cadastre()
                hometheme()
        });

        buttonPress.addEventListener("mouseenter", () => {
            if(!isDarkTheme) {
                buttonPress.classList.add("toggleButton")
            }else {
                buttonPress.classList.add("toggleOther")
            }
            
            
        })
    }
  
    
    toggleBtn()  
    
})
    

