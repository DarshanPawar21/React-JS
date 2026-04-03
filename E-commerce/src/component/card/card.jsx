import { useEffect, useState } from "react";

const Card = () => {

    const [card, setcard] = useState(JSON.parse(localStorage.getItem("card")) || []);

    const remove = (i) => {
        const data = JSON.parse(localStorage.getItem("card"));
        data.splice(i, 1)
        setcard(data)
        localStorage.setItem("card", JSON.stringify(data))
    }

    return (<>
        <div className="container-fluid  d-flex gap-5 py-5 justify-content-center row mt-5">
            {card.map((pro, i) =>
                <div key={i} className=" col-3 d-flex justify-content-center">
                    <div className="card rounded-5  " style={{ width: "18rem", height: "auto", backgroundColor: "#FFF8E7" }}>
                        <img
                            src={pro.image}
                            className="card-img-top rounded-top-5 p-2"
                            style={{
                                height: "200px",
                                width: "100%",
                                objectFit: "cover",
                                display: "block"
                            }}
                        />
                        <div className="card-body" style={{ height: "auto" }}>
                            <h5 className="card-title">{pro.name}</h5>
                            <p className="card-text ">
                                {
                                    pro.dec
                                }
                            </p>
                            {/* <h5>Quantity : {pro.Qut }</h5> */}
                            <h5 className="card-title mt-1">Price : {(pro.price / 90 * 1000).toFixed(2)}₹</h5>
                            <h5 className="card-title mt-1">Qunty : {pro.qty }</h5>
                            <div className="d-flex gap-3">
                                {/* <button href="#" className="btn btn-success px-4">
                                    Buy
                                </button> */}
                                <button href="#" className="btn btn-danger w-100 px-4 mt-2" onClick={() => remove(i)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>)
}
export default Card;