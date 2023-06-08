import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, sendCart } from "../../store/cart-actions";

const CartSubscriber = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    if (cart.isChanged === true) {
      dispatch(sendCart());
    }
  }, [dispatch, cart]);

  return null;
};

export default CartSubscriber;
