document.addEventListener("DOMContentLoaded" , function() {

const questions = document.querySelectorAll("#container_questions .li-0")

//percorrendo por cada um dentro do questions
questions.forEach(question => {
    question.addEventListener("click", () => {
       //acessa o prox elemento irmão 
        const answer = question.nextElementSibling; //metodo ´para acessar o irmao seguinte da linha
        //condicional para verificar a contsnate e as tag em low que se igualam a p
            if(answer && answer.tagName.toLowerCase() === "p"){
                answer.classList.toggle("visible"); //METODO TOOGLE para alternar entre visible e invisible
                
            }
        })

        question.addEventListener("mouseenter", () => {
            question.classList.add("animate-quest")
            question.style.cursor = "pointer"
        })

        
    })

const aQuestion = document.querySelectorAll(".p-0 .p-a")
console.log(aQuestion)

    aQuestion.forEach(a => {
        a.addEventListener("mouseenter", () => {
            a.classList.add("animate-question")
        })
    })


    const bodySa = document.getElementById("bodyH");
    const titleContainer = document.querySelectorAll("#title h1");
    const apresentationP = document.querySelectorAll("#apresentation p");
    const containerH = document.querySelectorAll("#container_start h3");
    const containerP = document.querySelectorAll("#container_start p");
    const tipsH = document.querySelectorAll("#container_tips h4");
    const tipsLi = document.querySelectorAll("#container_tips ol .li_tips");
    const tipsP = document.querySelectorAll("#container_tips ol .p_tips");
    const symtomsH = document.querySelectorAll("#container_symtoms h6");
    const symtomsLi = document.querySelectorAll("#container_symtoms ul li");
    const afterP = document.getElementById("after_p");
    const footerP = document.querySelectorAll("#footerId p");
    const footer = document.getElementById("footerId");
    const questionsP = document.querySelectorAll("#container_questions .p-0");
    const questionsH = document.querySelectorAll("#container_questions h6");
    const buttonPress = document.getElementById("btnN"); // Defina o ID correto do seu botão

    let isDarkTheme = false;

    function toggleSaude() {
        Array.from(titleContainer).forEach(element => {
            element.classList.toggle("titleTech");
        });

        Array.from(apresentationP).forEach(element => {
            element.classList.toggle("pWhite");
        });

        Array.from(containerH).forEach(element => {
            element.classList.toggle("startH", isDarkTheme);
        });

        Array.from(containerP).forEach(element => {
            element.classList.toggle("startP", isDarkTheme);
        });

        Array.from(tipsH).forEach(element => {
            element.classList.toggle("tipsOfH", isDarkTheme);
        });

        Array.from(tipsLi).forEach(element => {
            element.classList.toggle("lIwhite", isDarkTheme);
        });

        Array.from(tipsP).forEach(element => {
            element.classList.toggle("pTipsW", isDarkTheme);
        });

        Array.from(symtomsH).forEach(element => {
            element.classList.toggle("symP", isDarkTheme);
        });

        Array.from(symtomsLi).forEach(element => {
            element.classList.toggle("symLi", isDarkTheme);
        });

        Array.from(questionsP).forEach(element => {
            element.classList.toggle("questP", isDarkTheme);
        });

        Array.from(questionsH).forEach(element => {
            element.classList.toggle("questH", isDarkTheme);
        });

        Array.from(footerP).forEach(element => {
            element.classList.toggle("footerLetra", isDarkTheme);
        });


        footer.classList.toggle("gitFooter", isDarkTheme);

        bodySa.classList.toggle("bodyMore", isDarkTheme);
        afterP.classList.toggle("afterWhite", isDarkTheme);
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
            toggleSaude();
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
   

})


