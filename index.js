const express = require("express");
const app = express();
const PORT = process.env.PORT | 3000;
const clientRoute = require("./routes/clientRouter");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Invoices Backend!");
});

app.use("/api/", clientRoute);

app.listen(PORT, () => console.log(`listening in port ${PORT}`));
