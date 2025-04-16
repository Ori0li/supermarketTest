const express = require("express");
const productRouter = express.Router();
const { productService } = require("../services/productService");
const { existor } = require("../middleware/existor.js");
const { validator } = require("../middleware/validator.js");

productRouter.get("/", async (req, res) => {
  const products = await productService.getAll();
  res.json(products);
});

productRouter.get("/:name", existor, async (req, res) => {
  const { name } = req.params;
  await productService.getProduct(name);
  res.json({
    success: true,
    message: `${name} 상품 조회 성공`,
    data: { product: req.product },
  });
});

productRouter.post("/", async (req, res) => {
  const { name, price } = req.body;
  await productService.createProduct(name, price);
  res.json({ success: true, message: `${name} 상품 추가 성공` });
});

productRouter.put("/", validator, async (req, res) => {
  const { id, name, price } = req.body;
  await productService.updateProduct(id, name, price);
  res.json({ success: true, message: `${name} 상품 수정 완료` });
});

productRouter.delete("/", async (req, res) => {
  const { id } = req.body;
  await productService.deleteProduct(id);
  res.json({ success: true, message: "상품 삭제 완료" });
});

module.exports = { productRouter };
