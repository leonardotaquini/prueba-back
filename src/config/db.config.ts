import { Dialect, Sequelize } from 'sequelize';
import { config } from "dotenv";

config();

const db = {
    name: process.env.DB_NAME!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASS!,
    host: process.env.DB_HOST!,
    dialect: process.env.DB_DIALECT! as Dialect,
};

const sequelize = new Sequelize(db.name, db.user, db.password, {
  host: db.host,
  dialect: "mysql",
});

export const connectDB = async () => {
    try {
        await sequelize.sync();
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
    }

export default sequelize;
