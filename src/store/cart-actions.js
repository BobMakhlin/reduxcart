import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const sendCart = () => {
  return (dispatch, getState) => {
    const { items, totalQuantity } = getState().cart;
    const sendRequest = fetch(
      "https://react-http-c16bc-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      { method: "PUT", body: JSON.stringify({ items, totalQuantity }) }
    );

    sendRequest.then(
      () => {
        dispatch(
          uiActions.showSuccessNotification({
            title: "Success",
            message: "The cart was successfully saved.",
          })
        );
      },
      () => {
        dispatch(
          uiActions.showErrorNotification({
            title: "Error",
            message: "Couldn't save the cart",
          })
        );
      }
    );
  };
};

export const fetchCart = () => {
  return async (dispatch, getState) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-c16bc-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart");
      }

      return await response.json();
    };

    try {
      const cart = await fetchData();
      dispatch(
        cartActions.initialize({
          items: cart.items ?? [],
          totalQuantity: cart.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showErrorNotification({
          title: "Error",
          message: "Could not fetch the cart",
        })
      );
    }
  };
};
