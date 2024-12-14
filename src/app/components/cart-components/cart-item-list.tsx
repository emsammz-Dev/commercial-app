import getCartOfUser from "@/db-functions/cart-db/get-Cart-Of-User";
import GetQuantityOfProduct from "@/db-functions/cart-db/get-quantity-of-product";
import GetUserId from "@/db-functions/user-db/get-user-id";
import Image from "next/image";

import getAllCartItemId from "@/db-functions/get-All-Cart-Item-ids-array";
import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import GetTotalNoOfProduct from "@/db-functions/cart-db/get-total-no-of-product";
import ClearAllBtn from "./clear-all-btn-comp";
import CartCompAddQuantityBtn from "./cart-comp-add-quantity";
import CartCompSubQuantityBtn from "./cart-comp-sub-quantity";
import RemoveThatProductBtn from "./remove-that-product-btn";

export default async function CartItemList() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const isAuth = await isAuthenticated();
  const user = await getUser();
  let userEmail: string;

  if (isAuth) {
    if (user.email) {
      userEmail = user.email;
    }
  }

  const getUserId = await GetUserId(userEmail!);

  const userId = getUserId;
  const cartIdOfUser = await getCartOfUser(userId!);

  const productQuantity = await GetQuantityOfProduct(cartIdOfUser!);
  const totalProducts = await GetTotalNoOfProduct(cartIdOfUser!);

  const items = await getAllCartItemId(cartIdOfUser!);

  return (
    <>
      <div
        className={`h-screen flex-1 flex flex-col gap-2 justify-center items-center text-3xl italic ${
          totalProducts == 0 ? `block` : `hidden`
        }`}
      >
        <div>
          {isAuth ? (
            <div>
              <div>ooops!! no item in your cart</div>
              <LogoutLink>
                <button className="bg-slate-700 px-2 rounded-md">Logout</button>
              </LogoutLink>
            </div>
          ) : (
            <div className="space-y-2">
              <div>ooops!! You need to signup & login</div>
              <div className="flex gap-2 justify-center">
                <RegisterLink>
                  <button className="bg-slate-700 px-2 rounded-md">
                    Sign Up
                  </button>
                </RegisterLink>
                <LoginLink>
                  <button className="bg-slate-700 px-2 rounded-md">
                    Login
                  </button>
                </LoginLink>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={`flex-1 p-2 ${totalProducts > 0 ? `block` : `hidden`}`}>
        <div className="flex justify-between">
          <div className="text-xl font-bold bg-gray-600 px-4 rounded-md">
            Cart
          </div>
          <ClearAllBtn cardId={cartIdOfUser!} />
        </div>

        {/* grid on cart */}
        <div className="grid grid-cols-1 gap-4 my-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex w-full h-[100px] justify-between hover:bg-gray-600/50 rounded-xl px-4"
            >
              {/* image */}
              <div className="flex gap-2">
                <div className="w-10">1</div>

                <Image
                  className="bg-gray-600 rounded-xl"
                  src={item.imageURL}
                  width={100}
                  height={100}
                  alt="cartitem"
                  priority
                ></Image>

                {/* detail */}
                <div className="flex flex-col justify-between">
                  <h5 className="text-lg max-md:text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>

                  <div className="flex items-center gap-4">
                    <div className="text-sm max-md:text-sm italic">
                      Quantity:
                    </div>
                    <CartCompSubQuantityBtn
                      productId={item?.id}
                      cartId={cartIdOfUser!}
                    />

                    {productQuantity.map((quan) =>
                      quan.productId == item.id ? (
                        <div
                          key={item.id}
                          className="w-8 h-6 border-[1px] rounded-xl flex justify-center"
                        >
                          {quan.quantity}
                        </div>
                      ) : (
                        " "
                      )
                    )}

                    <CartCompAddQuantityBtn
                      productId={item?.id}
                      cartId={cartIdOfUser!}
                    />
                  </div>

                  <div className="text-md max-md:text-sm font-bold text-gray-900 dark:text-white">
                    Rs.{item.price}
                  </div>
                </div>
              </div>
              {/* cancel button */}
              <RemoveThatProductBtn
                productId={item?.id}
                cartId={cartIdOfUser!}
              />
              {/* end */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
