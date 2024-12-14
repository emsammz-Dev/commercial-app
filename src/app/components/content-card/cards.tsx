import getAllProducts from "@/db-functions/get-all-products";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../product-components/addtocartbutton";

async function Cards() {
  const products = await getAllProducts();

  return (
    <>
      {/* product grid responsive */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 xl:grid-cols-3 sm:gap-10 max-sm:gap-5 max-sm:p-4 sm:p-8 sm:place-items-center">
        {products.map((product) => (
          <div
            key={`${product.id}`}
            className="flex sm:flex-col max-sm:w-full sm:w-[250px] h-fit max-md:w-[220px]  sm:rounded-xl shadow-2xl hover:shadow-black  max-sm:border-[1px] max-sm:p-2 max-sm:rounded-md"
          >
            <Link href={`/product/${product.id}`} className="relative">
              <Image
                className="sm:rounded-t-md h-[150px] max-sm:w-[150px] opacity-70 hover:opacity-80"
                src={product.imageURL}
                width={250}
                height={200}
                alt="image"
                priority
                style={{ height: "auto", width: "auto" }}
              ></Image>
              <div
                className={`w-2 h-2 rounded-full absolute top-2 right-2 ${
                  product.status ? `bg-green-500` : ` bg-red-500`
                }`}
              ></div>
            </Link>
            {/* product detail */}
            <div className="max-sm:flex-1 max-sm:px-2 sm:p-1 flex flex-col">
              <h5 className="text-lg font-thin max-md:text-sm sm:tracking-tighter text-gray-300 hover:text-gray-100">
                {product.name}
              </h5>
              <p className="text-sm italic h-20">{product.details}</p>

              {/* price */}
              <p className="text-sm sm:text-lg text-gray-300 hover:text-gray-100 px-2">
                Rs. {product.price}
              </p>

              {/* size */}
              <div className="flex font-mono text-blue-800">
                <button
                  className={`rounded-md px-2 p-1  hover:bg-blue-900/50 hover:text-white font-semibold text-xs shadow-xl `}
                >
                  sm
                </button>
                <button
                  className={`rounded-md px-2 p-1  hover:bg-blue-900/50 hover:text-white font-semibold text-xs shadow-xl `}
                >
                  md
                </button>
                <button
                  className={`rounded-md px-2 p-1  hover:bg-blue-900/50 hover:text-white font-semibold text-xs shadow-xl`}
                >
                  lg
                </button>
                <button
                  className={`rounded-md px-2 p-1  hover:bg-blue-900/50 hover:text-white font-semibold text-xs shadow-xl `}
                >
                  xl
                </button>
              </div>
            </div>
            {/* add to cart button */}

            <AddToCartButton productID={product.id} />
            {/* end */}
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
