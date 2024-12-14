"use client";
import DecreaseCartProductQuantity from "@/db-functions/cart-db/decrease-cart-product-quantity";
import { GrSubtract } from "react-icons/gr";

interface Props {
  productId: number;
  cartId: number;
}

export default function CartCompSubQuantityBtn(props: Props) {
  const { productId, cartId } = props;
  return (
    <>
      <button
        onClick={async () => {
          await DecreaseCartProductQuantity(productId, cartId);
        }}
      >
        <GrSubtract />
      </button>
    </>
  );
}
