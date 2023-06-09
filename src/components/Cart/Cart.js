import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { cartActions } from "../../store/cart-slice";

const Cart = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((store) => store.ui.isCartVisible);
  const items = useSelector((store) => store.cart.items);
  const handleDecrementQuantity = useCallback(
    (id) => {
      dispatch(cartActions.decrementQuantity({ productId: id }));
    },
    [dispatch]
  );
  const handleIncrementQuantity = useCallback(
    (id) => {
      dispatch(cartActions.incrementQuantity({ productId: id }));
    },
    [dispatch]
  );

  if (isVisible === false) {
    return null;
  }

  const cartItems = items.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      onDecrementQuantity={handleDecrementQuantity}
      onIncrementQuantity={handleIncrementQuantity}
    />
  ));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItems}</ul>
    </Card>
  );
};

export default Cart;
