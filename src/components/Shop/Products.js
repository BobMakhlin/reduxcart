import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Coffee"
          price={2}
          description="A cup of hot coffee served with cookies"
        />
        <ProductItem
          title="Apple juice with ice cubes"
          price={2.5}
          description="A glass of apple juice with ice cubes"
        />
      </ul>
    </section>
  );
};

export default Products;
