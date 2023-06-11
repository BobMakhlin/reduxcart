import Cart from "./components/Cart/Cart";
import CartSubscriber from "./components/Cart/CartSubscriber";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  return (
    <>
      <CartSubscriber />
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </>
  );
}

export default App;
