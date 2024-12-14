"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export default async function RemoveProductCancelBtn(
  productId: number,
  cartId: number
) {
  //console.log(productId);
  const prisma = new PrismaClient();
  await prisma.cartItem.delete({
    where: {
      cartId: cartId,
      productId: productId,
    },
  });
  //console.log(a);
  revalidatePath("/cart");
}
