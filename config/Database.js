import { Sequelize } from "sequelize";

const DB_NAME = "crud_upload_mern";
const USERNAME = "root";
const PASSWORD = "";

const db = new Sequelize(DB_NAME, USERNAME, PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

export default db;
