import { PrismaClient } from "@prisma/client";

export default async function getCartItemQuantityOfProducts(cartIdOfUser: {
  id: number;
}) {
  const prisma = new PrismaClient();
  const getQuantityOfProducts = await prisma.cartItem.findMany({
    where: {
      cartId: cartIdOfUser.id,
    },
  });
  //console.log(getQuantityOfProducts);
  return getQuantityOfProducts;
}
