import React from "react";
import { useNavigate } from "react-router"
function Product({ name, image, dec, price, addtocard, qty, cate, rating ,stock }) {
    // console.log(rating)
    // console.log(sto)
    const Navigate = useNavigate();
    return (
        <div className="card rounded-5 col-12 " style={{ width: "18rem", height: "auto", backgroundColor: "#FFF8E7" }}>
            <img
                src={image}
                className="card-img-top rounded-top-5 p-2"
                style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "cover",
                    display: "block"
                }}
            />
            <div className="card-body" >
                <h5 className="card-title">{name}</h5>
                <div className="card-text scrollspy-example " style={{ maxHeight: "75px", overflowY: "auto", scrollbarWidth: "thin" }}>
                    {dec}
                </div>
                <h5 className="card-title mt-2">Price : {(price / 90 * 1000).toFixed(2)}₹</h5>
                <div className="d-flex  gap-3 mt-2 text-center">
                    <button href="#" className="btn text-black btn-warning" onClick={() => addtocard({ name, image, dec, price, qty })}>
                        Add to Cart
                    </button>
                    <button href="#" className="btn btn-primary " style={{ width: "90px" }} onClick={() =>
                        Navigate("/view", { state: { name, image, dec, price, cate, rating , stock} })
                    } >
                        View
                    </button>
                </div>
                <div className=" d-flex justify-content-center mt-2">
                    <button href="#" className="btn btn-success " style={{ width: "100%" }}>
                        Buy
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Product;