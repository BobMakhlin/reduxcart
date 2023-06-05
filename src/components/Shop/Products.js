import { useDispatch } from "react-redux";
import { actions } from "../../store/cart-slice";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const ITEMS = [
  {
    id: "229f7725-50b8-475b-b904-ba36be041d1d",
    title: "Coffee",
    price: 2,
    description: "A cup of hot coffee served with cookies",
  },
  {
    id: "e30f77dd-ad61-4470-b02b-dffff3c9aee7",
    title: "Apple juice with ice cubes",
    price: 2.5,
    description: "A glass of apple juice with ice cubes",
  },
];

const Products = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(actions.addProduct({ product }));
  };

  const productItems = ITEMS.map((item) => (
    <ProductItem key={item.id} item={item} onAddToCart={handleAddToCart} />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productItems}</ul>
    </section>
  );
};

export default Products;
