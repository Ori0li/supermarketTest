const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

const productService = {
  async getAll() {
    const products = await prisma.products.findMany();
    return products;
  },

  async getProduct(name) {
    const product = await prisma.products.findMany({
      where: { name: name },
    });
    return product;
  },

  async createProduct(name, price) {
    const product = await prisma.products.create({
      data: { name, price: +price },
    });
    return product;
  },

  async updateProduct(id, name, price) {
    const product = await prisma.products.update({
      where: { id: +id },
      data: { name, price: +price },
    });
    return product;
  },
  async deleteProduct(id) {
    const product = await prisma.products.delete({
      where: { id: +id },
    });
    return product;
  },
};

module.exports = { productService };
