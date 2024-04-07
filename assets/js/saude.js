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
   
})



