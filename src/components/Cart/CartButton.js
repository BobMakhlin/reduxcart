import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { actions } from "../../store/ui-slice";

const CartButton = () => {
  const dispatch = useDispatch();
  const cartItemsCount = useSelector((store) => store.cart.items.length);

  const handleClick = useCallback(() => {
    dispatch(actions.toggleCartVisiblity());
  }, [dispatch]);

  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemsCount}</span>
    </button>
  );
};

export default CartButton;
