import { useCallback } from "react";
import classes from "./CartItem.module.css";

const CartItem = ({ item, onDecrementQuantity, onIncrementQuantity }) => {
  const { id, title, quantity, total, price } = item;

  const handleDecrementQuantity = useCallback(() => {
    onDecrementQuantity(id);
  }, [onDecrementQuantity, id]);
  const handleIncrementQuantity = useCallback(() => {
    onIncrementQuantity(id);
  }, [onIncrementQuantity, id]);

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrementQuantity}>-</button>
          <button onClick={handleIncrementQuantity}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
