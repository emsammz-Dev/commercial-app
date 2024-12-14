import { PrismaClient } from "@prisma/client";

export default async function getAllCartItemIdsArray(cart: number) {
  const prisma = new PrismaClient();
  const cartItems = await prisma.cartItem.findMany({
    where: {
      cartId: cart,
    },
    select: {
      productId: true,
    },
  });

  let d: number[] = [];
  cartItems.map((item) => {
    d = [...d, item.productId];
  });

  const cartProduct = await prisma.product.findMany({
    where: {
      id: {
        in: d,
      },
    },
  });

  return cartProduct;
}
