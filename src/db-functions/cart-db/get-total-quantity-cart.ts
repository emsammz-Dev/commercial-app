import GetQuantityOfProduct from "./get-quantity-of-product";

export default async function GetTotalCartQuantity(cardIdOfUser: number) {
  const productQuantity = await GetQuantityOfProduct(cardIdOfUser);
  let allQuantity: number = 0;

  productQuantity.map((items) => {
    allQuantity += items.quantity;
  });

  return allQuantity;
}
