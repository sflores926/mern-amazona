import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

// port that will respond from the backend and we can also set port number
const port = process.env.PORT || 5000;
// calling on app.listen server starts and ready to responding to front end
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
