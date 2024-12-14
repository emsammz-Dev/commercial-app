"use client";
import IncreaseCartProductQuantity from "@/db-functions/cart-db/increase-cart-product-quantity";
import { IoMdAdd } from "react-icons/io";

interface Props {
  productId: number;
  cartId: number;
}

export default function CartCompAddQuantityBtn(props: Props) {
  const { productId, cartId } = props;
  return (
    <div>
      <button
        onClick={async () => {
          await IncreaseCartProductQuantity(productId, cartId);
        }}
      >
        <IoMdAdd />
      </button>
    </div>
  );
}
