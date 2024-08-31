import express, { Application } from "express";
import cors from "cors";
import { json } from "body-parser";
import UserRoutes from "./routes/user.routes";
import { connectDB } from "./config/db.config";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.json({ message: "API" });
});

app.use("/api", UserRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
