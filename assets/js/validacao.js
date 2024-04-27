document.addEventListener("DOMContentLoaded", function(){
    const cadEmail = document.querySelectorAll("#cadForm #email")
    const cadPass = document.querySelectorAll("#cadForm #password")
    let emailHelper = document.getElementById("email-helper")
    let passHelper = document.getElementById("senha-helper")
    let nameHelper = document.getElementById("name-helper")
    console.log(nameHelper)
    const visible = document.getElementsByClassName("visible")
    const nameRequired = document.querySelectorAll("#cadForm #name")
    let dateVerifique = document.querySelectorAll("#cadForm #data")
    let dateHelper = document.getElementById("date-helper")
    console.log(dateVerifique)
    console.log(nameRequired)

    dateVerifique.forEach(date => {
        date.addEventListener("change", () => {
            let dataObj = new Date(date.value)

            let dataMax = new Date(2015, 0, 1,)
            let dataMin = new Date(1940,11, 31,)

            if(dataObj < dataMin || dataObj > dataMax){
                date.classList.remove("correct")
                date.classList.add("error")
                dateHelper.innerText = "Data válida entre 1940 a 2015"
                dateHelper.classList.add("visible")
            }else {
                date.classList.remove("error", "auxiliarClone")
                date.classList.add("correct")
                dateHelper.innerText = ""
                dateHelper.classList.remove("visible") 
            }
        })

        date.addEventListener("blur", () => {
            date.classList.remove("error", "correct")
        })
    })

    nameRequired.forEach(name => {
        name.addEventListener("input", () => {
            let check = /^[a-zA-Z\s]{3,}$/;

            if(!check.test(name.value)){
                name.classList.remove("correct")
                name.classList.add("error")
                nameHelper.innerText = "O nome deve ter minimamente mais de 3 letras, sem números."
                nameHelper.classList.add("visible")
            }else {
                name.classList.remove("error", "auxiliarClone")
                name.classList.add("correct")
                nameHelper.innerText = ""
                nameHelper.classList.remove("visible")
            }

            
        })

        name.addEventListener("blur", () => {
            name.classList.remove("error", "correct")
        })
     
    
    })

    cadEmail.forEach(email => {
        email.addEventListener("input", () => {
            let check = /^\S+@\S+.\S+$/
            if(!check.test(email.value)){
                email.classList.remove("correct")
                email.classList.add("error")
                emailHelper.innerText = "O email deve conter a seguinte estutura: email@email.com."
                emailHelper.classList.add("visible")
            }else {
                email.classList.remove("error", "auxiliarClone")
                email.classList.add("correct")
                emailHelper.innerText = ""
                emailHelper.classList.remove("visible")
            }
        })
        
        email.addEventListener("blur", () => {
            email.classList.remove("error", "correct")
        })
     
    })
   
 
    cadPass.forEach(password => {
        password.addEventListener("input", () => {
            let check = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
    
            if(!check.test(password.value)){
                password.classList.remove("correct")
                password.classList.add("error", "auxiliarClone")
               
                passHelper.innerText = "A sua senha deve conter no minímo 6 caracteres, um sÍmbolo, um número e uma letra."
                passHelper.classList.add("visible")
            }else {
                password.classList.remove("error")
                password.classList.add("correct")
                passHelper.innerText = ""
                passHelper.classList.remove("visible")
            }
        })
        
       
       
        password.addEventListener("blur", () => {
            password.classList.remove("error", "correct", visible)
           
            
        })
    
    })

    const confirPass = document.getElementById("confirmpassword")
    const confirmHelper = document.getElementById("Confirm-helper")
    

    confirPass.addEventListener("input", () => {
        const cadPass = document.querySelectorAll("#cadForm #password")[0];
        if(confirPass.value !== cadPass.value){
            confirPass.classList.remove("correct")
            confirPass.classList.add("error", "auxiliarClone")
           
            confirmHelper.innerText = "As senhas não são iguais."
            confirmHelper.classList.add("visible")
        }else {
            confirPass.classList.remove("error")
            confirPass.classList.add("correct")
            confirmHelper.innerText = ""
            confirmHelper.classList.remove("visible")
            

        }
    })

    confirPass.addEventListener("blur", () => {
        confirPass.classList.remove("error", "correct", visible)
       
        
    })
    

    

    const buttonPress = document.getElementById("btnN");
    const body = document.getElementsByTagName("body")[0];
    const footer = document.getElementById("footerId");
    const footerP = document.querySelectorAll("#footerId p");
    const cadForm = document.getElementById("cadForm")
    let isDarkTheme = false;

    




    function cadastre() {
        
    buttonPress.addEventListener("click", () => {
    isDarkTheme = !isDarkTheme
    body.classList.toggle("bodyBlack", isDarkTheme)

    buttonPress.addEventListener("click", () => {
        Array.from(footerP).forEach(element => {
            element.classList.toggle("footerLetra", isDarkTheme);
        });

        body.classList.toggle("bodyBlack", isDarkTheme);
        footer.classList.toggle("gitFooter", isDarkTheme);
    })
    
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

           cadastre()
            
            
    });

    buttonPress.addEventListener("mouseenter", () => {
        if(!isDarkTheme) {
            buttonPress.classList.add("toggleButton")
        }else {
            buttonPress.classList.add("toggleOther")
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
 