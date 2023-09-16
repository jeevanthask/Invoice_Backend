const express = require("express");
const app = express();
const PORT = process.env.PORT | 3000;
const clientRoute = require("./routes/clientRouter");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRouter");
const invoiceRouter = require("./routes/invoiceRouter");
const { graphqlHTTP } = require("express-graphql");
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");
const paymentMethodRouter = require("./routes/paymentMethodRouter");
const orderRouter = require("./routes/orderRouter");

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello Invoices Backend!");
});

app.use("/api/", clientRoute);
app.use("/api/", userRoute);
app.use("/api/", invoiceRouter);
app.use("/api/", paymentMethodRouter);
app.use("/api/", orderRouter);
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
  })
);

app.listen(PORT, () => console.log(`listening in port ${PORT}`));
