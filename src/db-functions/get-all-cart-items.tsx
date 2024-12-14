import { PrismaClient } from "@prisma/client";

function getAllCartItems() {
  const prisma = new PrismaClient();
  const cart = prisma.cart.findMany();

  return cart;
}

export default getAllCartItems;
