const User = require("../models/User")
const  FitVitality  = require("../models/FitVitality")
const path = require("path")
module.exports = class FitController {
    static showFit(req, res) {
      res.render("home")
    }

    static saudeFit(req, res){
      res.render("suaSaude")
    }

    static sobreFit(req, res) {
      res.render("index")
    }

    static apoioFit(req, res) {
      res.render("apoio")
    }

    static async apoioFitPost(req, res) {
      try {
        const { title, aboutThey, email } = req.body;
    
        // Verificar se todos os campos necessários estão presentes
        if (!title || !aboutThey || !email) {
          throw new Error('Todos os campos são obrigatórios');
        }
    
        // Criar um novo registro no banco de dados
        const newFit = await FitVitality.create({
          title: title,
          aboutThey: aboutThey,
          email: email
        });
    
        req.flash("message", "Sua mensagem foi enviada! Obrigado pela a confiança e fique tranquilo, suas mensages serão vistas apenas por profissionais qualificados.");
        
    // Redirecionar com a mensagem flash
       return res.render("apoio")
      } catch (error) {
        // Lidar com erros
        console.error(`Erro ao criar entrada: ${error}`);
        req.flash("message", "Erro ao criar a entrada, verifique os campos")
      }
    }
    
    
};