import { useCallback } from "react";
import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { actions } from "../../store/cart";

const CartButton = () => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(actions.toggleCartVisiblity());
  }, [dispatch]);

  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
