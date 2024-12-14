"use server";
import { PrismaClient } from "@prisma/client";

export default async function GetTotalNoOfProduct(cartId: number) {
  const prisma = new PrismaClient();
  const a = await prisma.cartItem.findMany({
    where: {
      cartId: cartId,
    },
  });

  return a.length;
}
