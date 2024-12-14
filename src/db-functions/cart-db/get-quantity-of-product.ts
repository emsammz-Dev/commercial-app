"use server";
import { PrismaClient } from "@prisma/client";

export default async function GetQuantityOfProduct(cartId: number) {
  const prisma = new PrismaClient();
  const getquantity = await prisma.cartItem.findMany({
    where: {
      cartId: cartId,
    },
  });

  return getquantity;
}
