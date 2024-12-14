"use server";
import { PrismaClient } from "@prisma/client";

export default async function getCartOfUser(cartUserId: number) {
  //console.log(cartUserId);
  const prisma = new PrismaClient();
  const getCartOfUser = await prisma.cart.findFirst({
    where: {
      userId: cartUserId,
    },
    select: {
      id: true,
    },
  });
  //console.log(getCartOfUser);

  if (getCartOfUser) {
    return getCartOfUser.id;
  }
}
