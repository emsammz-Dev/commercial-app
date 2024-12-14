This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

temp

<div className="grid grid-cols-1 gap-2">
          <div className="flex">
            {/* image */}
            <div className=" w-[150px] h-[150px]">
              <Image
                className="bg-gray-600 rounded-xl"
                src="/mainPage/items/item1.webp"
                width={150}
                height={150}
                alt="cartitem"
              ></Image>
            </div>

            {/* details */}
            <div className="flex flex-col gap-2">
              <h5 className="text-lg max-md:text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>

              <div className="flex items-center gap-4">
                <div className="text-sm max-md:text-sm italic">Quantity:</div>
                <button onClick={decreQunatity}>
                  <GrSubtract />
                </button>
                <div className="w-8 h-6 border-[1px] rounded-xl flex justify-center">
                  {quantity}
                </div>
                <button onClick={increQunatity}>
                  <IoMdAdd />
                </button>
              </div>

              <div className="text-md max-md:text-sm font-bold text-gray-900 dark:text-white">
                Rs. 599
              </div>
            </div>

            {/* cancel button */}
            <button className="flex">
              <MdCancel
                size={30}
                className=" text-blue-900 hover:text-red-900"
              />
            </button>
            {/* end */}
          </div>
          <div className="flex">
            {/* image */}
            <div className=" w-[150px] h-[150px]">
              <Image
                className="bg-gray-600 rounded-xl"
                src="/mainPage/items/item1.webp"
                width={150}
                height={150}
                alt="cartitem"
              ></Image>
            </div>

            {/* details */}
            <div className="flex flex-col gap-2">
              <h5 className="text-lg max-md:text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>

              <div className="flex items-center gap-4">
                <div className="text-sm max-md:text-sm italic">Quantity:</div>
                <button onClick={decreQunatity}>
                  <GrSubtract />
                </button>
                <div className="w-8 h-6 border-[1px] rounded-xl flex justify-center">
                  {quantity}
                </div>
                <button onClick={increQunatity}>
                  <IoMdAdd />
                </button>
              </div>

              <div className="text-md max-md:text-sm font-bold text-gray-900 dark:text-white">
                Rs. 599
              </div>
            </div>

            {/* cancel button */}
            <button className="flex">
              <MdCancel
                size={30}
                className=" text-blue-900 hover:text-red-900"
              />
            </button>
            {/* end */}
          </div>
          <div className="flex">
            {/* image */}
            <div className=" w-[150px] h-[150px]">
              <Image
                className="bg-gray-600 rounded-xl"
                src="/mainPage/items/item1.webp"
                width={150}
                height={150}
                alt="cartitem"
              ></Image>
            </div>

            {/* details */}
            <div className="flex flex-col gap-2">
              <h5 className="text-lg max-md:text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>

              <div className="flex items-center gap-4">
                <div className="text-sm max-md:text-sm italic">Quantity:</div>
                <button onClick={decreQunatity}>
                  <GrSubtract />
                </button>
                <div className="w-8 h-6 border-[1px] rounded-xl flex justify-center">
                  {quantity}
                </div>
                <button onClick={increQunatity}>
                  <IoMdAdd />
                </button>
              </div>

              <div className="text-md max-md:text-sm font-bold text-gray-900 dark:text-white">
                Rs. 599
              </div>
            </div>

            {/* cancel button */}
            <button className="flex">
              <MdCancel
                size={30}
                className=" text-blue-900 hover:text-red-900"
              />
            </button>
            {/* end */}
          </div>
          <div className="flex">
            {/* image */}
            <div className=" w-[150px] h-[150px]">
              <Image
                className="bg-gray-600 rounded-xl"
                src="/mainPage/items/item1.webp"
                width={150}
                height={150}
                alt="cartitem"
              ></Image>
            </div>

            {/* details */}
            <div className="flex flex-col gap-2">
              <h5 className="text-lg max-md:text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>

              <div className="flex items-center gap-4">
                <div className="text-sm max-md:text-sm italic">Quantity:</div>
                <button onClick={decreQunatity}>
                  <GrSubtract />
                </button>
                <div className="w-8 h-6 border-[1px] rounded-xl flex justify-center">
                  {quantity}
                </div>
                <button onClick={increQunatity}>
                  <IoMdAdd />
                </button>
              </div>

              <div className="text-md max-md:text-sm font-bold text-gray-900 dark:text-white">
                Rs. 599
              </div>
            </div>

            {/* cancel button */}
            <button className="flex">
              <MdCancel
                size={30}
                className=" text-blue-900 hover:text-red-900"
              />
            </button>
            {/* end */}
          </div>
        </div>
