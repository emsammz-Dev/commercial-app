import getThatOneProduct from "@/db-functions/get-that-one-product";

import Image from "next/image";
import Link from "next/link";

export default async function Products({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const productId = await params;

  const product = await getThatOneProduct(Number(productId.id));

  return (
    <>
      {/* item full details */}
      <div className="pt-16">
        <div className="flex max-lg:flex-col m-4 gap-2">
          {/* product image */}
          <div className="flex flex-col gap-2">
            <Image
              className="rounded-2xl"
              src={`${product?.imageURL}`}
              width={400}
              height={500}
              alt="item1"
              priority
            ></Image>
          </div>
          {/* detail about product btn */}
          <div className="flex-1 flex flex-col px-2">
            <div className="flex-1 flex flex-col font-sans">
              {/* name of product */}
              <h5 className="text-2xl max-md:text-xl mb-2 font-semibold">
                {product?.name}
              </h5>
              {/* rating  */}
              <div className="flex items-center">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <span className="bg-blue-100 text-blue-800 text-lg font-semibold px-2 rounded ms-3">
                  5.0
                </span>
                <span className="ms-3 text-green-600 italic text-sm hover:text-green-400">
                  <Link href="#reviews">(12 Reviews)</Link>
                </span>
              </div>

              {/* availability */}
              <div className="text-sm flex items-center gap-1">
                {product?.status ? (
                  <>
                    <div className={`w-2 h-2 rounded-full bg-green-500`}></div>
                    <div className="italic  text-green-400"> Available</div>
                  </>
                ) : (
                  <>
                    <div className={`w-2 h-2 rounded-full bg-red-500`}></div>
                    <div className="italic  text-red-400">Not Available</div>
                  </>
                )}
              </div>
              {/* ingridient & detail */}
              <div className="flex-1 text-sm space-y-2">
                {/* ingridient */}
                <div>
                  <span className="me-2">INGRIDIENT:</span>
                  <span className="italic">{product?.ingridient}</span>
                </div>
                {/* detail */}
                <div>
                  <span className="me-2">DETAILS:</span>
                  <span className="italic">{product?.details}</span>
                </div>
              </div>
            </div>
            {/* price & button */}
            <div className="flex flex-col gap-2">
              {/* price */}
              <div className="flex px-2">
                <div className="text-2xl max-md:text-lg">
                  Rs. {product?.price}
                </div>{" "}
                {/* size */}
                <div className="flex font-mono text-blue-800 ">
                  <button
                    className={`rounded-md px-4 hover:italic hover:text-white  font-semibold text-lg shadow-xl `}
                  >
                    sm
                  </button>
                  <button
                    className={`rounded-md px-4 hover:italic hover:text-white font-semibold text-lg shadow-xl `}
                  >
                    md
                  </button>
                  <button
                    className={`rounded-md px-4 hover:italic hover:text-white font-semibold text-lg shadow-xl`}
                  >
                    lg
                  </button>
                  <button
                    className={`rounded-md px-4 hover:italic hover:text-white font-semibold text-lg shadow-xl `}
                  >
                    xl
                  </button>
                </div>
              </div>

              {/* buttons */}
              <div className="flex gap-4">
                <button className=" bg-blue-950/90 hover:bg-blue-900/70 text-gray-300 px-4 rounded-md">
                  Add To Cart
                </button>
                <button className="bg-blue-950/90 hover:bg-blue-900/70 text-gray-300 px-4 py-2 rounded-md">
                  <Link href="/cart/">BUY NOW</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quae
          aspernatur rem, velit asperiores laudantium, voluptas adipisci eum
          mollitia possimus quas ullam labore dicta voluptates!
        </div>
      </div>
      <div className="h-screen">lorem</div>
    </>
  );
}
