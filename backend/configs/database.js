import { Sequelize } from "sequelize";

const db = new Sequelize(
  process.env.DB_NAME || "crud-db-1", // Nome do banco de dados
  process.env.DB_USER || "root", // Usuário do banco de dados
  process.env.DB_PASSWORD || "12345678", // Senha do banco de dados
  {
    host: process.env.DB_HOST || "db", // Usar "db" para Docker ou "localhost" localmente
    dialect: "mysql", // Tipo de banco de dados
    port: 3306, // Porta do MySQL
  }
);

async function checkConnection() {
  try {
    await db.authenticate();
    console.log("Conexão com o banco de dados foi bem-sucedida!");
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
  }
}

checkConnection();
export default db;
