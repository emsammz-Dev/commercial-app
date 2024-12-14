"use server";
import getCartOfUser from "@/db-functions/cart-db/get-Cart-Of-User";
import GetTotalNoOfProduct from "@/db-functions/cart-db/get-total-no-of-product";
import GetUserId from "@/db-functions/user-db/get-user-id";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function NavCartTotal() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  let userEmail: string;
  if (user.email) {
    userEmail = user.email;
  }

  // get user id from db
  const getUserId = await GetUserId(userEmail!);
  //console.log(getUserId);

  const userId = getUserId;
  const cartOfUser = await getCartOfUser(userId!);
  //console.log(getCartOfUser);
  const cartId = cartOfUser;
  const total = await GetTotalNoOfProduct(cartId!);

  return total;
}
