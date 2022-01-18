const express = require(`express`);
const databaseConnection = require("./db/connection");
const app = express();
const pageNotFound = require("./middleware/pageNotFound");
const router = require("./routes/items");
require("dotenv").config();

app.use(express.json());
app.use("/api/v1/items", router);
app.use(pageNotFound);

const port = process.env.PORT || 3000;

const main = async () => {
  try {
    await databaseConnection(process.env.MONGO_URI).then(() => {
      app.listen(port, () => {
        console.log(`server listening to port ${port}`);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

main();
