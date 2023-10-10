import express from "express";
import apiV1 from "./routes/v1";
import sequelize from "./data/database";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import YAML from "yaml";
import * as fs from "fs";

const file = fs.readFileSync("./swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

const app = express();
const PORT = 4000;
app.use(cors());
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }
  next();
});
app.use(express.json());
app.use("/v1", apiV1);

// API DOCS
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

void sequelize.sync({ force: true }).then(() => {
  console.log("Database synchronized.");

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

export default app;
