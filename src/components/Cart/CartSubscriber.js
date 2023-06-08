import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendCart } from "../../store/cart-actions";

let isInitial = true;

const CartSubscriber = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCart());
  }, [dispatch, cart]);

  return null;
};

export default CartSubscriber;
