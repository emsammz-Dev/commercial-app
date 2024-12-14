"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PrismaClient } from "@prisma/client";

import { redirect } from "next/navigation";

export default async function UpdateAddToCart(productID: number) {
  const { getUser, isAuthenticated } = getKindeServerSession();
  // kinde auth
  const user = await getUser();
  const isauth = await isAuthenticated();

  const prisma = new PrismaClient();
  // authentication check
  if (!isauth) {
    redirect("/authentication");
  }
  //if user authenticated
  if (isauth) {
    // check if user exist
    const createNewUser = await prisma.user.findUnique({
      where: {
        email: user.email!,
      },
    });
    //console.log(createNewUser);
    // new user create in db
    if (!createNewUser) {
      await prisma.user.create({
        data: {
          name: user.given_name!,
          email: user.email!,
        },
      });
    }
    // if user exist in db
    else {
      // console.log(createNewUser);
      const createNewCart = await prisma.cart.findUnique({
        where: {
          userId: createNewUser.id,
        },
      });

      // create new cart of user
      if (!createNewCart) {
        await prisma.cart.create({
          data: {
            userId: createNewUser.id,
          },
        });
      }
      // cart exist of user
      else {
        const createCartItem = await prisma.cartItem.findFirst({
          where: {
            productId: productID,
          },
        });

        // create new cartItem if dont exist of that cart id
        // console.log(productID.productID);
        if (!createCartItem) {
          await prisma.cartItem.create({
            data: {
              productId: productID,
              cartId: createNewCart.id,
            },
          });
        }
        // cart-item exist increase the quantity if added
        else {
          //console.log(createCartItem);
          await prisma.cartItem.update({
            where: {
              productId: createCartItem.productId,
            },
            data: {
              quantity: createCartItem.quantity + 1,
            },
          });
        }
      }
    }
  }
}
