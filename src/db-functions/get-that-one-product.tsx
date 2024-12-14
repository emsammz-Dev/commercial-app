import { PrismaClient } from "@prisma/client";

async function getThatOneProduct(Id: number) {
  const prisma = new PrismaClient();

  const thatProduct = await prisma.product.findUnique({
    where: {
      id: Id,
    },
  });

  return thatProduct;
}

export default getThatOneProduct;
