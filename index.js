import Express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const PORT = 8080;
const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
const corsOptions = {};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Default Route");
});

import { routes } from "./src/routes/data_routes.js";
routes(app);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
