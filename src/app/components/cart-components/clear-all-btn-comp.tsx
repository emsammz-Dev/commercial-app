"use client";

import CartClearAll from "@/db-functions/cart-db/cart-clear-all";

interface Props {
  cardId: number;
}
function ClearAllBtn(props: Props) {
  const { cardId } = props;

  return (
    <>
      <button
        className="italic text-lg text-gray-500 hover:underline hover:text-blue-600/80"
        onClick={async () => {
          CartClearAll(cardId);
        }}
      >
        clear all
      </button>
    </>
  );
}

export default ClearAllBtn;
