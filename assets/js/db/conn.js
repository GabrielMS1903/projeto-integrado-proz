const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("fitvit", "root", "", {
    host: "https://projeto-integrado-proz.vercel.app",
    dialect:"mysql"
})




try {
    sequelize.authenticate();
    console.log("Conectamos com sucesso ao banco de dados");
} catch (error) {
    console.error("Erro na conexão com o banco de dados:", error);
}

module.exports = sequelize;
