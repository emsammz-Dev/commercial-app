"use server";
import getCartOfUser from "./get-Cart-Of-User";
import GetUserId from "../user-db/get-user-id";
import GetQuantityOfProduct from "./get-quantity-of-product";
import getThatOneProduct from "../get-that-one-product";

export default async function TotalOrderMrp(userEmail: string) {
  // get user id from db
  const getUserId = await GetUserId(userEmail);

  const userId = getUserId;
  const cartIdOfUser = await getCartOfUser(userId!);

  const productQuantity = await GetQuantityOfProduct(cartIdOfUser!);

  let totalMRP: number = 0;

  const a = productQuantity.map(async (items) => {
    const product = await getThatOneProduct(items.productId);
    if (product) {
      const totalplusqunatity = items.quantity * product.price;

      return totalplusqunatity;
    }
  });
  const b = await Promise.all(a);

  totalMRP = b.reduce((acc, curr) => acc! + curr!, 0)!;

  return totalMRP;
}
