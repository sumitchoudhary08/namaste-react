import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemsList from "./ItemsList";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleCartClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center ">
      <div className="m-2 p-2 font-bold">Cart Page</div>
      <div className="w-6/12 m-auto">
        <button
          className="px-2 mx-4 border-black rounded-lg bg-blue-100"
          onClick={handleCartClear}
        >
          Clear Cart
        </button>
        {cartItems.length > 0 ? (
          <ItemsList items={cartItems} />
        ) : (
          <h1 className="p-2 m-2 bg-gray-50">
            Cart is Empty!! Start adding product
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
