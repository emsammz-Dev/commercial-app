"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();
export default async function CartClearAll(cardId: number) {
  try {
    await prisma.cartItem.deleteMany({
      where: {
        cartId: cardId as number,
      },
    });

    revalidatePath("/cart");
  } catch (e) {
    console.log(e);
  } finally {
    await prisma.$disconnect();
  }
}
