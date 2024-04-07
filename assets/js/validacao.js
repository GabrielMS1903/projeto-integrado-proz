document.addEventListener("DOMContentLoaded", function(){
    const cadEmail = document.querySelectorAll("#cadForm #email")
    const cadPass = document.querySelectorAll("#cadForm #password")
    let emailHelper = document.getElementById("email-helper")
    let passHelper = document.getElementById("senha-helper")
    let nameHelper = document.getElementById("name-helper")
    console.log(nameHelper)
    const visible = document.getElementsByClassName("visible")
    const nameRequired = document.querySelectorAll("#cadForm #nome")
    console.log(nameRequired)

    nameRequired.forEach(name => {
        name.addEventListener("input", () => {
            let check = /^[a-zA-Z]{3,}$/
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
   





})
 