import { uiActions } from "./ui-slice";

export const sendCart = () => {
  return async (dispatch, getState) => {
    const sendRequest = fetch(
      "https://react-http-c16bc-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      { method: "PUT", body: JSON.stringify(getState().cart) }
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
