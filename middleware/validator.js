const validator = (req, res, next) => {
  if (!req.body) {
    return res
      .status(400)
      .json({ success: false, message: "body는 필수 입니다." });
  }
  const { name, price } = req.body;
  if (!name.trim() || !price) {
    return res.status(400).json({
      success: false,
      message: "name과 price는 필수 입니다.",
    });
  }
  const nameRegex = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/;
  if (!nameRegex.test(name)) {
    return res.status(400).json({
      success: false,
      message: "name은 한글,영어,숫자만 포함해야합니다.",
    });
  }
  if (isNaN(price)) {
    return res.status(400).json({
      success: false,
      message: "price는 숫자만 포함해야합니다.",
    });
  }
  if (price < 0) {
    return res.status(400).json({
      success: false,
      message: "price는 0 이상이여야합니다.",
    });
  }
  next();
};

module.exports = { validator };
