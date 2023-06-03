import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const isVisible = useSelector((store) => store.cart.isCartVisible);
  const items = useSelector((store) => store.cart.items);

  if (isVisible === false) {
    return null;
  }
  const cartItems = items.map((item) => <CartItem key={item.id} item={item} />);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItems}</ul>
    </Card>
  );
};

export default Cart;
