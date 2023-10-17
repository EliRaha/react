import Product from "./Product";
import { Link } from "react-router-dom";

const Products = ({productsList, deleteItem}) => {


  return (
    <div className="container my-5">
      <Link
        to="/add-product"
        type="button"
        className="btn btn-success text-white  action-icon"
        style={{ fontSize: '16px' }}
          > Add product
       
      </Link>

      <section className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {productsList.map((item) => (
          <Product key={item.id} {...item} deleteItem={deleteItem} />
        ))}
      </section>
    </div>
  );
};

export default Products;
