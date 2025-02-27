import { Sequelize } from "sequelize";
import db from "../configs/database.js";

const { DataTypes } = Sequelize; //const { datatypes } = Sequelize;: Aqui você desestrutura o objeto Sequelize para
// obter o objeto datatypes, que contém os tipos de dados
// (como STRING, INTEGER, etc.) usados para definir as colunas do modelo.
const User = db.define(
  "Users", // Nome da tabela será exatamente 'Users', sem pluralização automática.
  {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    cpf: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
export default User;

(async () => {
  await db.sync();
})(); // tenta sincronizar o banco de dados com os modelos que você definiu no seu
// código. Isso significa que ele vai criar as tabelas no banco de dados (caso não existam) e
// ajustar a estrutura delas de acordo com os modelos definidos.
