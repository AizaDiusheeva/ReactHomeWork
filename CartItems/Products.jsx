import Form from "../AddItem/Form";
import "./_product.scss";
import ButtonDelete from "./ButtonDelete";

const Products = ({
  product,
  deleteProduct,
  increase,
  changeValue,
  decrease,
}) => {
  const { img, title, priceTotal, count, id } = product;

  const priceFormatter = new Intl.NumberFormat();

  return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/products/${img}`} alt={product.title} />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        <Form
          count={count}
          increase={increase}
          decrease={decrease}
          changeValue={changeValue}
          id={id}
        />
      </div>
      <div className="product__price">
        {priceFormatter.format}
        {priceTotal} руб.
      </div>
      <div className="product__controls">
        <ButtonDelete deleteProduct={deleteProduct} id={id} />
      </div>
    </section>
  );
};

export default Products;
