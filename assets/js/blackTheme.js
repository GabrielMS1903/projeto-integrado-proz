document.addEventListener("DOMContentLoaded", function() {
    const buttonPress = document.getElementById("btnN");
    const loginContainer = document.getElementById("login-container");
    const lab = document.getElementsByClassName("lab");
    const title = document.querySelectorAll("#login-container h1");
    const body = document.getElementsByTagName("body")[0];
    const check = document.getElementsByClassName("check");
    const cadastreSe = document.querySelectorAll("#cadastre p");
    const cadastreA = document.querySelectorAll("#cadastre p a");
    const footer = document.getElementById("footerId");
    const footerP = document.querySelectorAll("#footerId p");
    let isDarkTheme = false;

    function themeLogin() {
        const themeClass = isDarkTheme ? "black" : "white";
        Array.from(lab).forEach(element => {
            element.classList.toggle("blackOther", isDarkTheme);
        });
    
        Array.from(title).forEach(element => {
            element.classList.toggle("titleH", isDarkTheme);
        });
    
        Array.from(check).forEach(element => {
            element.classList.toggle("checkBlack", isDarkTheme);
        });
    
        Array.from(cadastreSe).forEach(element => {
            element.classList.toggle("blackOther", isDarkTheme);
        });
    
        Array.from(cadastreA).forEach(element => {
            element.classList.toggle("blackA", isDarkTheme);
        });
    
        Array.from(footerP).forEach(element => {
            element.classList.toggle("footerLetra", isDarkTheme);
        });
    
        
        buttonPress.addEventListener("click" , () => {
                isDarkTheme = !isDarkTheme; // Alternar entre escuro e claro ao clicar no botão
                loginContainer.classList.toggle("black", isDarkTheme);
                Array.from(lab).forEach(element => {
                    element.classList.toggle("blackOther", isDarkTheme);
                });
         
                Array.from(title).forEach(element => {
                    element.classList.toggle("titleH", isDarkTheme);
                });
    
                body.classList.toggle("bodyBlack", isDarkTheme);
    
                Array.from(check).forEach(element => {
                    element.classList.toggle("checkBlack", isDarkTheme);
                });
    
                Array.from(cadastreSe).forEach(element => {
                    element.classList.toggle("blackP", isDarkTheme);
                });
    
                Array.from(cadastreA).forEach(element => {
                    element.classList.toggle("blackA", isDarkTheme);
                });
    
                Array.from(footerP).forEach(element => {
                    element.classList.toggle("footerLetra", isDarkTheme);
                });
    
                footer.classList.toggle("gitFooter", isDarkTheme);
        });
    }
    
    const bodyHome = document.getElementById("bodyH")
    const focus = document.querySelectorAll("#about .p-0")
    const cardTheP = document.querySelectorAll(".card p")

    function hometheme() {
        Array.from(focus).forEach(element => {
            element.classList.toggle("changeHome", isDarkTheme);
        });
       
        Array.from(cardTheP).forEach(element => {
            element.classList.toggle("cardWhite", isDarkTheme);
        });

        Array.from(footerP).forEach(element => {
            element.classList.toggle("footerLetra", isDarkTheme);
        });
    
        buttonPress.addEventListener("click", () => {
            isDarkTheme = !isDarkTheme; // Alternar entre escuro e claro ao clicar no botão
            Array.from(focus).forEach(element => {
                element.classList.toggle("changeHome", isDarkTheme);
            });
            
            bodyHome.classList.toggle("changeBody", isDarkTheme);
            footer.classList.toggle("gitFooter", isDarkTheme);

            Array.from(cardTheP).forEach(element => {
                element.classList.toggle("cardWhite", isDarkTheme);
            });

            Array.from(footerP).forEach(element => {
                element.classList.toggle("footerLetra", isDarkTheme);
            });
        });
    }

    
    //sua saude

    const bodySa = document.getElementById("bodyH")
    const titleContainer = document.querySelectorAll("#title h1")
    const apresentationP = document.querySelectorAll("#apresentation p")
    const containerH = document.querySelectorAll("#container_start h3")
    const containerP = document.querySelectorAll("#container_start p")
    const tipsH = document.querySelectorAll("#container_tips h4")
    const tipsLi = document.querySelectorAll("#container_tips ol .li_tips ")
    const tipsP = document.querySelectorAll("#container_tips ol .p_tips ")
    const symtomsH = document.querySelectorAll("#container_symtoms h6")
    const symtomsLi = document.querySelectorAll("#container_symtoms ul li")
    const afterP = document.getElementById("after_p")
    const questionsP = document.querySelectorAll("#container_questions .p-0")
    const questionsH = document.querySelectorAll("#container_questions h6")

    function toggleSaude() {
        Array.from(titleContainer).forEach(element => {
            element.classList.toggle("titleTech");
        })

        Array.from(apresentationP).forEach(element => {
            element.classList.toggle("pWhite");
        })

        Array.from(containerH).forEach(element => {
            element.classList.toggle("startH", isDarkTheme);
        })

        Array.from(containerP).forEach(element => {
            element.classList.toggle("startP", isDarkTheme);
        })

        Array.from(tipsH).forEach(element => {
            element.classList.toggle("tipsOfH", isDarkTheme);
        })

        Array.from(tipsLi).forEach(element => {
            element.classList.toggle("lIwhite", isDarkTheme);
        })

        Array.from(tipsP).forEach(element => {
            element.classList.toggle("pTipsW", isDarkTheme);
        })

        Array.from(symtomsH).forEach(element => {
            element.classList.toggle("symP", isDarkTheme);
        })

        Array.from(symtomsLi).forEach(element => {
            element.classList.toggle("symLi", isDarkTheme);
        })

        Array.from(questionsP).forEach(element => {
            element.classList.toggle("questP", isDarkTheme);
        })

        Array.from(questionsH).forEach(element => {
            element.classList.toggle("questH", isDarkTheme);
        })

        buttonPress.addEventListener("click", () => {
            isDarkTheme = !isDarkTheme; // Alternar entre escuro e claro ao clicar no botão
            bodySa.classList.toggle("bodyMore", isDarkTheme);
            
            Array.from(titleContainer).forEach(element => {
                element.classList.toggle("titleTech");
            })

            Array.from(apresentationP).forEach(element => {
                element.classList.toggle("pWhite");
            })

            Array.from(containerH).forEach(element => {
                element.classList.toggle("startH", isDarkTheme);
            })

            Array.from(containerP).forEach(element => {
                element.classList.toggle("startP", isDarkTheme);
            })

            Array.from(tipsH).forEach(element => {
                element.classList.toggle("tipsOfH", isDarkTheme);
            })

            Array.from(tipsLi).forEach(element => {
                element.classList.toggle("lIwhite", isDarkTheme);
            })

            Array.from(tipsP).forEach(element => {
                element.classList.toggle("pTipsW", isDarkTheme);
            })

            Array.from(symtomsH).forEach(element => {
                element.classList.toggle("symP", isDarkTheme);
            })

            Array.from(symtomsLi).forEach(element => {
                element.classList.toggle("symLi", isDarkTheme);
            })

            afterP.classList.toggle("afterWhite", isDarkTheme);

            Array.from(questionsP).forEach(element => {
                element.classList.toggle("questP", isDarkTheme);
            })

            Array.from(questionsH).forEach(element => {
                element.classList.toggle("questH", isDarkTheme);
            })

            
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

        toggleSaude()
      
        themeLogin()
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
