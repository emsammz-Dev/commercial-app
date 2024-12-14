import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

export default function CartIcon() {
  return (
    <div className="fixed bottom-2 right-2 border-green-500 p-2 text-green-500 hover:text-blue-950 hover:bg-green-400/50 hover:border-blue-950 z-10">
      <div className="relative rounded-full border-[1px] p-2">
        <Link href={"/cart"}>
          <IoCartOutline size={50} className="" />
        </Link>
      </div>
    </div>
  );
}
