import getCartOfUser from "@/db-functions/cart-db/get-Cart-Of-User";
import GetTotalNoOfProduct from "@/db-functions/cart-db/get-total-no-of-product";
import GetTotalCartQuantity from "@/db-functions/cart-db/get-total-quantity-cart";
import TotalOrderMrp from "@/db-functions/cart-db/total-order-mrp";
import GetUserId from "@/db-functions/user-db/get-user-id";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function OrderSummary() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const isAuth = await isAuthenticated();
  const user = await getUser();
  let userEmail: string;

  if (isAuth) {
    if (user.email) {
      userEmail = user.email;
    } else {
      console.log("object");
    }
  }

  const getUserId = await GetUserId(userEmail!);

  const userId = getUserId;
  const cartIdOfUser = await getCartOfUser(userId!);
  const totalProducts = await GetTotalNoOfProduct(cartIdOfUser!);
  const allQuantity = await GetTotalCartQuantity(cartIdOfUser!);

  const totalMrp: number = await TotalOrderMrp(userEmail!);

  const discount = (totalMrp * 5) / 100;

  const tax: number = Number((((totalMrp - discount) * 10) / 100).toFixed());

  const totalAfterDiscount = Number((totalMrp + tax - discount).toFixed());

  return (
    <>
      <div
        className={`${
          totalProducts == 0 ? `hidden w-0` : `block w-[400px]`
        } max-[850px]:w-full h-fit sticky top-20 z-10 flex flex-col bg-gray-700 hover:bg-gray-800 p-4 mx-4 rounded-md`}
      >
        <div className="text-center bg-gray-800 p-2 shadow-xl hover:bg-blue-900 rounded-md">
          Order Summary
        </div>

        <div className="flex px-4 my-6">
          <div className="flex flex-col gap-4">
            <div>Total Products :</div>
            <div>Total Quantity :</div>
            <div>Total MRP :</div>

            <div>Tax(10%) :</div>
            <div>Discount(5%) :</div>
            <div>Total (after discount) :</div>
          </div>
          <div className="flex-1 text-end flex flex-col gap-4">
            <div>{totalProducts}</div>
            <div>{allQuantity}</div>
            <div>{totalMrp}</div>

            <div>{tax}</div>
            <div>{discount}</div>
            <div>{totalAfterDiscount}</div>
          </div>
        </div>

        <div className="flex justify-between">
          <button className="bg-gray-800 rounded-md p-2 shadow-xl hover:bg-blue-900 ">
            <Link href={"/product"}>Continue Shopping</Link>
          </button>
          <button className="bg-gray-800 rounded-md p-2 shadow-xl hover:bg-blue-900">
            Order Now
          </button>
        </div>
        {/* end */}
      </div>
    </>
  );
}
