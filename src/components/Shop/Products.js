import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_product = [
  {
    id: 'p1',
    price: 100,
    title : 'My first book',
    description : 'The fiest book I ever wrote'
  },
  {
    id: 'p2',
    price: 200,
    title : 'My Second book',
    description : 'The second book I ever wrote'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_product.map(product => (
           <ProductItem
           key={product.id}
           id={product.id}
           title={product.title}
           price={product.price}
           description={product.description}
         />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
