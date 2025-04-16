const { productService } = require("../services/productService");

const existor = async (req, res, next) => {
  const product = await productService.getProduct(req.params.name);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "존재하지 않는 상품입니다.",
    });
  }
  req.product = product;
  next();
};

module.exports = { existor };
