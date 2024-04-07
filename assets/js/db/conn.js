const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("fitvitality", "root", "", {
    host: "localhost",
    dialect:"mysql"
})

try {
    sequelize.authenticate()
    console.log("Conectamos com sucesso")
}catch(error) {
    console.log(`Erro na conexão ${error}`)
}

module.exports = sequelize