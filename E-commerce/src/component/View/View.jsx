import { useLocation } from "react-router";
const View = () => {
    const { state } = useLocation();
    return (<>
        <div className="" style={{ marginTop: "4%" }}> </div>
        <div className=" rounded-5 d-flex col-12 justify-content-center container " style={{ width: "100%", height: "75vh", backgroundColor: "#FFF8E7" }}>
            <img
                src={state.image}
                className="card-img-top rounded-top-5 p-2 d-flex align-content-center"
                style={{
                    height: "80vh",
                    width: "45%",
                    objectFit: "cover",
                    display: "block"
                }}
            />
            <div className="card-body " >
                <h5 className="card-title fs-3 mt-5">Product Name : {state.name}</h5>
                <div className="card-text scrollspy-example mt-3" style={{ maxHeight: "75px", overflowY: "auto", scrollbarWidth: "thin" }}>
                    {state.dec}
                </div>
                <h5 className="card-title mt-2">Price : {(state.price / 90 * 1000).toFixed(2)}₹</h5>
                <h5 className="card-title mt-2">Categoury : {state.cate}</h5>
                <h5 className="card-title mt-2">Rating : {state.rating}</h5>
                <h5 className="card-title mt-2">Stoke : {state.stock}</h5>
                <div className="d-flex  gap-3  text-center">
                    <a href="/home" className="btn btn-secondary mt-4" style={{ width: "90%" }}>
                        Back
                    </a>
                </div>
            </div>
        </div>
    </>)
}
export default View;