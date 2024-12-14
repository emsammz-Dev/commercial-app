import dynamic from "next/dynamic";

const CartItems = dynamic(
  () => import("../components/cart-components/cart-item-list"),
  { ssr: true }
);

const OrderSummary = dynamic(
  () => import("../components/cart-components/order-summary"),
  { ssr: true }
);

export default function Cart() {
  return (
    <>
      <div className="bg-gray-950 w-full flex flex-col my-4">
        {/* hidden slide below navbar */}
        <div className="flex justify-center sticky top-0 w-full left-0 right-0 h-16 bg-slate-950 z-20"></div>

        <div className="flex max-[850px]:flex-col">
          <OrderSummary />
          <CartItems />
        </div>
      </div>
    </>
  );
}
