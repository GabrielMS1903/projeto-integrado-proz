const meu_form = document.getElementById('meu_form')
const nome = document.getElementById('nome')
const tell = document.getElementById('tell')
const email = document.getElementById('email')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

//validação dos Inputs

function checkInputs() {
    const nomeValue = nome.value;
    const tellValue = tell.value;
    const emailValue = email.value;

    if (nomeValue === "") {
        setErrorFor(nome);
    } else {
        setSuccessFor(nome);
    }

    if (tellValue === "") {
        setErrorFor(tell);
    } else {
        setSuccessFor(tell);
    }

    if (emailValue === "") {
        setErrorFor(email);
    } else {
        setSuccessFor(email);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;

    formControl.className = "form-control error";
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;

    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}


//tema escuro 
const buttonPress = document.getElementById("btnN");
const body = document.getElementById("bodyBlack");
const footer = document.getElementById("footerId");
const footerP = document.querySelectorAll("#footerId p");
const cadForm = document.getElementById("cadForm")
let isDarkTheme = false;



function contato() {
        
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

           contato()
            
            
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














