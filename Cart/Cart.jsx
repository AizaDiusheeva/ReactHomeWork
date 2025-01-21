import { useEffect, useState } from "react";
import CartFooter from "../CartFooter/CartFooter";
import Cartheader from "../CartHeader/Index";
import Products from "../CartItems/Products";
import CartStore from "./CartStore/CartStore";

const Cart = () => {
  const [cart, setCart] = useState(CartStore);

  const [total, setTotal] = useState({
    price: cart.reduce((prev, curr) =>  prev + curr.priceTotal,
     0),
    count: cart.reduce((prev, curr) => prev + curr.count,
     0),
  });

  useEffect(() => {
setTotal({
  price: cart.reduce((prev, curr) =>  prev + curr.priceTotal, 0),
  count: cart.reduce((prev, curr) =>  prev + curr.count, 0),

})
  }, [cart])

  const deleteProduct = (id) => {
    setCart((cart) => cart.filter((product) => id !== product.id));
  };
  const increase = (id) => {
    console.log("increase", id);

    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          const newCount = product.count + 1;
          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price,
          };
        }
        return product;
      });
    });
  };
  const decrease = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1 > 1 ? product.count - 1 : 1;
          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price,
          };
        }
        return product;
      });
    });
  };
  const changeValue = (id, value) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price,
          };
        }
        return product;
      });
    });
  };

  const products = cart.map((product) => {
    return (
      <Products
        product={product}
        key={product.id}
        deleteProduct={deleteProduct}
        increase={increase}
        decrease={decrease}
        changeValue={changeValue}
      />
    );
  });

  return (
    <section className="cart">
      <Cartheader />
      {products}

      <CartFooter total={total} />
    </section>
  );
};

export default Cart;
