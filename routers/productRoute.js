const express = require("express");
const productRouter = express.Router();
const { productService } = require("../services/productService");
const { existor } = require("../middleware/existor.js");
const { validator } = require("../middleware/validator.js");

productRouter.get("/", async (req, res) => {
  const products = await productService.getAll();
  res.status(200).json({
    success: true,
    message: "전체 상품 조회 성공",
    data: { ...products },
  });
  res.status(400).json({
    success: false,
    message: "전체 상품 조회 실패",
  });
});

productRouter.get("/:name", existor, async (req, res) => {
  const { name } = req.params;
  await productService.getProduct(name);
  res.status(200).json({
    success: true,
    message: `${name} 상품 조회 성공`,
    data: { product: req.product },
  });
});

productRouter.post("/", async (req, res) => {
  const { name, price } = req.body;
  await productService.createProduct(name, price);
  res.status(200).json({ success: true, message: `${name} 상품 추가 성공` });
  res.status(400).json({
    success: false,
    message: `${name} 상품 추가 실패`,
  });
});

productRouter.put("/", validator, async (req, res) => {
  const { id, name, price } = req.body;
  await productService.updateProduct(id, name, price);
  res.status(200).json({ success: true, message: `${name} 상품 수정 완료` });
});

productRouter.delete("/", async (req, res) => {
  const { id } = req.body;
  await productService.deleteProduct(id);
  res.status(200).json({ success: true, message: "상품 삭제 완료" });
  res.status(400).json({
    success: false,
    message: "상품 삭제 실패",
  });
});

module.exports = { productRouter };
