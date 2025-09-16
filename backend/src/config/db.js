import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: "mysql",
    logging: false
  }
);

export async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("✅ DB conectada");
  } catch (err) {
    console.error("❌ Error conectando DB:", err.message);
    process.exit(1);
  }
}
