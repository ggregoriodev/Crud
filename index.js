import express from "express";
import UserRoute from "./backend/routes/UserRoute.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:3001", // cors tem que vir primeiro
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(UserRoute);

app.listen(port, () => {
  console.log(`rodando em ${port}. vá para http://localhost:${port}`);
});

app.get("/", (req, res) => {});
