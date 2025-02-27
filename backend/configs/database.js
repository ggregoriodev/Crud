import { Sequelize } from "sequelize";

const db = new Sequelize("crud_db", "root", "", {
  host: "db",
  dialect: "mysql",
});

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
