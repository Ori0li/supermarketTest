const express = require("express");
const { productRouter } = require("../routers/productRoute");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/products", productRouter);

app.listen(3000, () => {
  console.log("서버 시작");
});
