"use client";
import RemoveProductCancelBtn from "@/db-functions/cart-db/remove-product-cancel-btn";
import { MdCancel } from "react-icons/md";

interface Props {
  productId: number;
  cartId: number;
}

export default function RemoveThatProductBtn(props: Props) {
  const { productId, cartId } = props;
  return (
    <button
      className="flex"
      onClick={() => {
        RemoveProductCancelBtn(productId, cartId);
      }}
    >
      <MdCancel size={30} className=" text-white/50 hover:text-white/80" />
    </button>
  );
}
