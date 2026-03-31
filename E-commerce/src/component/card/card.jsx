import { useEffect, useState } from "react";

const Card = () => {

    const [card, setcard] = useState(JSON.parse(localStorage.getItem("card")) || []);
   
    const remove = (i) =>{
        const data = JSON.parse(localStorage.getItem("card"));
        data.splice(i,1)
        setcard(data)
        localStorage.setItem("card",JSON.stringify(data))
    }

    return (<>
        <div className="container-fluid  d-flex gap-5 py-5 justify-content-center row mt-5">
            {card.map((pro, i) =>
                <div className=" col-3 d-flex justify-content-center">
                    <div key={i} className="card rounded-5  " style={{ width: "18rem", height: "auto", backgroundColor: "#FFF8E7" }}>
                        <img
                            src={pro.images[0]}
                            className="card-img-top rounded-top-5 p-2"
                            alt={pro.title}
                            style={{
                                height: "200px",
                                width: "100%",
                                objectFit: "cover",
                                display: "block"
                            }}
                        />
                        <div className="card-body" style={{ height: "auto" }}>
                            <h5 className="card-title">{pro.title}</h5>
                            <p className="card-text ">
                                {
                                    pro.description
                                }
                            </p>
                            <div className="d-flex gap-3">
                                {/* <button href="#" className="btn btn-success px-4">
                                    Buy
                                </button> */}
                                <button href="#" className="btn btn-outline-danger px-4" onClick={() => remove(i)}>
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