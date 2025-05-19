import { REST_LOGO_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();

  const addItemCartHandler = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            data-testid="foodItems"
            className=" p-2 m-2 border-gray-200 border-b-2 text-left flex"
            key={item.card.info.id}
          >
            <div className="w-9/12">
              <div className="font-bold py-4">
                <span>{item.card.info.name} </span>
                <span>
                  - ₹
                  {(item.card.info.price || item.card.info.defaultPrice) / 100}
                </span>
              </div>
              <p className="font-thin">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 flex items-center">
              <div>
                <button
                  className="absolute bg-black text-white px-2 rounded-md"
                  onClick={() => addItemCartHandler(item)}
                >
                  Add +
                </button>
              </div>
              <img
                className="rounded-md"
                src={REST_LOGO_URL + item.card.info.imageId}
                alt="img"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
