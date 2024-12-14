"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export default async function IncreaseCartProductQuantity(
  productId: number,
  cartId: number
) {
  const prisma = new PrismaClient();
  const itemQuantity = await prisma.cartItem.findFirst({
    where: {
      cartId: cartId,
      productId: productId,
    },
    select: {
      quantity: true,
    },
  });

  if (itemQuantity) {
    const currentQuantity = itemQuantity.quantity;
    if (currentQuantity <= 5) {
      try {
        await prisma.cartItem.update({
          where: {
            cartId: cartId,
            productId: productId,
          },
          data: {
            quantity: currentQuantity + 1,
          },
        });

        revalidatePath("/cart");
      } catch (e) {
        console.log(e);
      } finally {
        prisma.$disconnect();
      }
    } else {
      console.log("max 5 items");
    }
  }
}
