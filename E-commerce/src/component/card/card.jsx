import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Card = () => {

    const [card, setcard] = useState(JSON.parse(localStorage.getItem("card")) || []);
    const [total, setotal] = useState(0)

    const remove = (i) => {
        const data = JSON.parse(localStorage.getItem("card"));
        data.splice(i, 1)
        setcard(data)
        localStorage.setItem("card", JSON.stringify(data))
    }
    const counttotal = (i) => {
        let sum = 0;
        card.forEach(e => {
            sum = sum + (e.price) * (e.qty)
            console.log(e.price)
        });
        setotal(sum)
    }
    useEffect(() => {
        counttotal()
    }, [card])
    return (<>
        <div className="container-fluid d-flex flex-column gap-5 py-5 justify-content-center row mt-2">
            {card.map((pro, i) =>
                <div key={i} className=" col-3 d-flex justify-content-center" style={{ width: "100%" }}>
                    <div className="d-flex p-2 rounded-5" style={{ width: "90%", height: "auto", backgroundColor: "#FFF8E7" }}>
                        <img
                            src={pro.image}
                            className="card-img-top rounded-top-5 p-2"
                            style={{
                                height: "300px",
                                width: "auto",
                                objectFit: "cover",
                                display: "block"
                            }}
                        />
                        <div className="card-body d-flex flex-column mt-5" style={{ height: "auto" }}>
                            <h5 className="card-title">{pro.name}</h5>
                            <p className="card-text ">
                                {
                                    pro.dec
                                }
                            </p>
                            {/* <h5>Quantity : {pro.Qut }</h5> */}
                            <h5 className="card-title mt-1">Price : {(pro.price * pro.qty / 94 * 1000).toFixed(2)}</h5>
                            <h5 className="card-title mt-1">Qunty : {pro.qty}</h5>
                            <div className="d-flex gap-3">
                                {/* <button href="#" className="btn btn-success px-4">
                                    Buy
                                </button> */}
                                <button href="#" className="btn btn-danger w-25 px-4 mt-2" onClick={() => remove(i)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        <div className="d-flex justify-content-center fixed-bottom">
            <h1 className="border border-2 border-dark rounded-2  p-1" style={{ backgroundColor: "#FFF8E7" }}>Total : {(total / 94 * 1000).toFixed((2))} </h1>
        </div>
    </>)
}
export default Card;