import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

const CartButton = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((store) => store.cart.totalQuantity);

  const handleClick = useCallback(() => {
    dispatch(uiActions.toggleCartVisiblity());
  }, [dispatch]);

  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
