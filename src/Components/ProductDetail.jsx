import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Components/Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { items } from "./Data";
const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    //  console.log(filterProduct);
    setProduct(filterProduct[0]);
    const relatedProducts = items.filter(
      (p) => p.category === product.category
    );
    console.log("related Products", relatedProducts);
    setRelatedProducts(relatedProducts);
  }, [id, product.category]);

  const AddToCart = (id, price, category, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      category,
      description,
      title,
      imgSrc,
    };
    setCart([...cart, obj]);
    console.log("Cart Elements=", cart);
    toast.success("Item Added on Cart ", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div>
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
          <button
            className="btn btn-warning"
            onClick={() =>
              AddToCart(
                product.id,
                product.price,
                product.category,
                product.title,
                product.description,
                product.imgSrc
              )
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
      <h2 className="text-center">Related Products</h2>
      <Product items={relatedProducts} cart={cart} setCart={setCart} />
    </>
  );
};

export default ProductDetail;
