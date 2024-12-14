import CartIcon from "../components/cart-components/cart-icon";
import Cards from "../components/content-card/cards";

async function Products() {
  return (
    <>
      <div className="bg-gray-950 flex relative">
        <div className="sticky top-0 left-0 w-56 h-screen bg-slate-900 max-md:hidden border-r-[1px] border-blue-950/50"></div>

        <div className="flex-1 pt-16">
          <Cards />
        </div>
        <CartIcon />
      </div>
    </>
  );
}

export default Products;
