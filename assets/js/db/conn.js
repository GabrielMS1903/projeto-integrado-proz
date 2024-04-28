const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql"
});



try {
    sequelize.authenticate();
    console.log("Conectamos com sucesso ao banco de dados");
} catch (error) {
    console.error("Erro na conexão com o banco de dados:", error);
}

module.exports = sequelize;
