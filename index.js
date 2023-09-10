const express = require("express");
const app = express();
const PORT = process.env.PORT | 3000;
const clientRoute = require("./routes/clientRouter");
const authRoute = require("./routes/authRouter");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello Invoices Backend!");
});

app.use("/api/", clientRoute);
app.use("/api/", authRoute);

app.listen(PORT, () => console.log(`listening in port ${PORT}`));
