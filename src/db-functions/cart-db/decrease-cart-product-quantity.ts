"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();
export default async function DecreaseCartProductQuantity(
  productId: number,
  cartId: number
) {
  try {
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

      if (currentQuantity > 1) {
        try {
          await prisma.cartItem.update({
            where: {
              cartId: cartId,
              productId: productId,
            },
            data: {
              quantity: currentQuantity - 1,
            },
          });
          revalidatePath("/cart");
        } catch (e) {
          console.log(e);
        } finally {
          prisma.$disconnect();
        }
      } else {
        console.log("minimum quantity should be 1");
      }
    } else {
      console.log("no item in cart");
    }
  } catch (e) {
    console.log(e);
  } finally {
    prisma.$disconnect();
  }
}
