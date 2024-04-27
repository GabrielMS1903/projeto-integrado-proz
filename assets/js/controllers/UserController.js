const User = require('../models/User')
const flash = require("express-flash")
const bcrypt = require('bcryptjs') //criptografar a senha

module.exports = class UserController {
    static cadastreFit(req, res) {
        res.render("cadastro")
        
      }

      static async cadastreFitPost(req, res) {
        const { name, email, password, confirmpassword, data, social } = req.body;
    
        // Validar se as senhas conferem
        if (password !== confirmpassword) {
            req.flash('message', 'As senhas não conferem, tente novamente!');
            return res.render('cadastro'); // Renderiza a página de cadastro novamente
        }
    
        try {
            // Verificar se o e-mail já está em uso
            const checkUser = await User.findOne({ where: { email: email } });
            if (checkUser) {
                req.flash('message', 'O e-mail já está em uso!');
                return res.render('cadastro'); // Renderiza a página de cadastro novamente
            }
    
            // Hash da senha
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt);
    
            // Criar o usuário
            const user = {
                name,
                email,
                password: hashedPassword,
                data, 
                social
            };
    
            const newUser = await User.create(user);
    
            // Inicializar a sessão
            req.session.userid = newUser.id;
    
            req.flash('message', 'Cadastro realizado com sucesso!');
            //req.session.save(() => {
               return  res.redirect('/logando');
            //});
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            res.status(500).send('Erro ao cadastrar usuário');
        }
    }
    

      static logFit(req, res) {
        res.render("login")
      }

      static  async logFitPost(req, res) {
        const {email, password} = req.body 

        const user = await User.findOne({where: {email: email}})

        if(!user) {
            req.flash("message", "Usuário não encontrado")
           return res.render("login")
        
        }

        const passMatch = bcrypt.compareSync(password, user.password) //comparando a senha

        if(!passMatch){
            req.flash("message", "Senha errada")
            return res.render("login")
        }

        req.session.userid = user.id 

        req.flash("message", "Login feito com sucesso")

        req.session.save(() => {
            res.redirect("/")
        })

      }

      //"destruir o login do user para ele sair"
      static logout(req, res) {
        req.session.destroy()
        res.redirect("/logando")
      }
}