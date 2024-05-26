import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Product = ({items,cart,setCart}) => {

const AddToCart=(id,price,category,title,description,imgSrc)=>{
      const obj={
        id,price,category,description,title,imgSrc
      }
      setCart([...cart,obj]);
      console.log("Cart Elements=",cart)
      toast.success('Item Added on Cart ', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}

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
    <div className="container my-5">
      <div className="row">
        {items.map((product) => {
          return (
            <>
            <div key={product.id} className="col-md-4 my-3 text-center">
              <div className="card" style={{width: '18rem'}}>
                <Link to={`/product/${product.id}`} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src={product.imgSrc} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                   {product.description}
                  </p>
                 <button className="btn btn-primary mx-3">{product.price} ₹</button>
                 <button className="btn btn-warning" onClick={()=>AddToCart(product.id,product.price,product.category,product.title,product.description,product.imgSrc)}>Add to Cart</button>
                </div>
              </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Product;
