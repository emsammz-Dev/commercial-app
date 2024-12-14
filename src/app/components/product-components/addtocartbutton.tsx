"use client";

import UpdateAddToCart from "@/db-functions/update-cart-add";
import React from "react";

interface Props {
  productID: number;
}

export default function AddToCartButton(props: Props) {
  const { productID } = props;
  return (
    <div>
      <button
        className=" bg-blue-950 opacity-60 hover:bg-blue-800/30 text-gray-300 hover:text-white w-full text-sm sm:p-2 sm:rounded-b-md "
        onClick={async () => {
          await UpdateAddToCart(productID);
        }}
      >
        Add-To-Cart
      </button>
    </div>
  );
}
