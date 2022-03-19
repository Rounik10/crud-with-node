import express from "express";

/** Used for parsing */
import bodyParser from "body-parser";

/** Importing routes defined */
import usersRoute from "./routes/users.js";

/** Creating express app */
const app = express();

/** Defining port */
const PORT = 5000;

/** Using JSON parsing */
app.use(bodyParser.json());

/** Using routes defined in users.js */
app.use("/users", usersRoute);

/** Home page get request */
app.get("/", (req, res) => res.send("Hello from home page"));

/** Listeing to events on PORT */
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
