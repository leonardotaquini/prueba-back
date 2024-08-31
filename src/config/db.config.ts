import { Dialect, Sequelize, DataTypes } from "sequelize";
import { config } from "dotenv";

config();

const db = {
  external_url: process.env.EXTERNAL_URL!,
  ssl: process.env.DB_SSL === "true", // Use this flag to enable/disable SSL based on an environment variable
};

const sequelize = new Sequelize(db.external_url, {
  dialect: "postgres",
  dialectOptions: {
    ssl: db.ssl
      ? {
          require: true, // Enforces SSL/TLS
          rejectUnauthorized: false, // Optional: Set this to true if you have the server's SSL certificate
        }
      : false,
  },
});

 const connectDB = async () => {
  try {
    await sequelize.sync({force: false});
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
};

export { 
  sequelize,
  connectDB,
  DataTypes,
};
