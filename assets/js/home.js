document.addEventListener("DOMContentLoaded", function (){
    const encaminha = document.querySelector("#caminho")
    const link = encaminha.querySelector("a");
    
    const hreforiginal =  "/templates/suaSaude.html"
    const textOriginal = "Informe-se e encaminhe-se clicando aqui!"
    console.log(encaminha)
    
   
    encaminha.addEventListener("mouseenter", () => {
        // Atualizar o texto e os estilos do link
        encaminha.textContent = "Sua saúde importa!";
        encaminha.style.color = "#206620";
        encaminha.style.fontSize = "30px";
        encaminha.href = hreforiginal; // Atualizar o href se necessário
    });
   
        encaminha.addEventListener( "mouseleave", () => {
            // Atualiza o conteúdo e os estilos do link
            encaminha.textContent = textOriginal
            encaminha.style.color = "#325343";
            encaminha.style.fontSize = "15px";
            encaminha.href = hreforiginal;
            
        });
   

    



  
    const imageUrls = {
        imagem1: "https://www.ufsm.br/pro-reitorias/prograd/caed/2021/01/12/cuide-da-sua-saude-mental-2",
        imagem2: "https://www.h9j.com.br/pt/sobre-nos/blog/dicas-para-uma-alimentacao-leve-e-nutritiva",
        imagem3: "https://www.lairametzen.com.br/materia/como-sair-do-sedentarismo-de-maneira-segura-e-saudavel/"

    }
    //carrosel
    
    const buttons = document.querySelectorAll("#img-picker li");
    const image = document.querySelector("#bannerImage");

    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            // Remove a classe 'selected' de todos os botões
            buttons.forEach((btn) => {
                btn.querySelector(".color").classList.remove("selected");
            });

            // Adiciona a classe 'selected' ao botão clicado
            const buttonClicked = e.currentTarget;
            buttonClicked.querySelector(".color").classList.add("selected");

            // Altera a imagem do banner conforme o botão clicado
            const id = buttonClicked.getAttribute("id");
            image.setAttribute("src", ` /img/${id}.png`);
            image.style.cursor = "pointer"
            image.style.width = "600px"
            // Adiciona a classe 'changing' à imagem

        });
    });

    image.addEventListener("click", () => {
        const a = document.createElement("a")
        const currentImagemiD = image.getAttribute("src").split("/").pop().split(".")[0]
        const imageTakeUrl = imageUrls[currentImagemiD]

        a.setAttribute("href", imageTakeUrl)
        a.click()
        console.log(a)

      
    })




    const titleQuestion = document.querySelectorAll( ".banner #h1-banner")
    
    titleQuestion.forEach(title => {

        title.addEventListener("mouseenter", () => {
            title.classList.add("animate-title")
        })

    })
    
    //body
const body = document.getElementsByTagName("body")[0]
console.log(body)


    //body.addEventListener("mouseenter", () => {
       // body.style.background = "linear-gradient(to right, #63995C , #E9DBC1 )";
   // })

   // body.addEventListener("mouseleave", () => {
   //   body.style.background = ""
   // })
    
    
})

