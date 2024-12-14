import { PrismaClient } from "@prisma/client";

async function getAllProducts() {
  const prisma = new PrismaClient();

  const products = await prisma.product.findMany();

  return products;
}

export default getAllProducts;
