document.addEventListener("DOMContentLoaded", function (){
    const encaminha = document.querySelector("#caminho")
    const link = encaminha.querySelector("a");
    
    const hreforiginal =  "/saude"
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
   

    


function changeImg() {


  
    const imageUrls = {
        imagem1: "https://www.ufsm.br/pro-reitorias/prograd/caed/2021/01/12/cuide-da-sua-saude-mental-2",
        imagem2: "https://www.h9j.com.br/pt/sobre-nos/blog/dicas-para-uma-alimentacao-leve-e-nutritiva",
        imagem3: "https://www.lairametzen.com.br/materia/como-sair-do-sedentarismo-de-maneira-segura-e-saudavel/",
      
    }

    const theFirst = {
        imagemF: "https://pep.ifsp.edu.br/index.php/ifsp-em-acao/1648-fique-de-olho-nos-seus-direitos-os-desafios-para-a-garantia-do-direito-a-saude-em-tempos-de-pandemia"
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
            img.setAttribute("src", ` /img/${id}.png`);
            image.style.cursor = "pointer"
            image.style.width = "600px"
            // Adiciona a classe 'changing' à imagem

        });
    });

    image.addEventListener("click", () => {
        
        const currentImagemiD = image.getAttribute("src").split("/").pop().split(".")[0]
        const imageTakeUrl = imageUrls[currentImagemiD] || theFirst[currentImagemiD]
        

    if(imageTakeUrl){
        const a = document.createElement("a")
        a.setAttribute("target", '_blank')
        a.setAttribute("href", imageTakeUrl)

        
        console.log(a)
        
        a.click()  
    }
      

      
    })

}

changeImg()

const titleQuestion = document.querySelectorAll( ".banner #h1-banner")
    
    titleQuestion.forEach(title => {

        title.addEventListener("mouseenter", () => {
            title.classList.add("animate-title")
    })

})
    


   const cardPDie = document.querySelectorAll(".cards .card p")
    const focus = document.querySelectorAll("#about .focus")
    const buttonPress = document.getElementById("btnN");
    const footer = document.getElementById("footerId");
    const body = document.getElementsByTagName("body")[0];
    const footerP = document.querySelectorAll("#footerId p");
    const pZero = document.querySelectorAll("#about .p-0")
    const aboutTheH = document.querySelectorAll("#about h2")
    let isDarkTheme = false
  

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

            body.classList.toggle("changeBody", isDarkTheme);
            footer.classList.toggle("gitFooter", isDarkTheme);

            Array.from(focus).forEach(element => {
                element.classList.toggle("focusBlack", isDarkTheme);
            });

            Array.from(aboutTheH).forEach(element => {
                element.classList.toggle("theHblack", isDarkTheme);
            });

            Array.from(cardPDie).forEach(element => {
                element.classList.toggle("cardWhite", isDarkTheme);
            });

            Array.from(footerP).forEach(element => {
                element.classList.toggle("footerLetra", isDarkTheme);
            });

            Array.from(pZero).forEach(element => {
                element.classList.toggle("pZeroBlack", isDarkTheme);
            });

            
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

