import { useEffect, useState } from "react";
import "../home/home.css";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productAPI();
    }, []);

    async function productAPI() {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
    }

    const CardAdd = (pro) =>{
        console.log("bhai bhai")
        const cardlist = JSON.parse(localStorage.getItem("card")) || [];
        cardlist.push(pro)
        localStorage.setItem("card",JSON.stringify(cardlist));
    } 
    return (
        <div className="container d-grid">
            <div className="d-flex justify-content-center py-5 row gap-5">
                {products.map((pro, i) => (
                    <div key={i} className="card rounded-5 col-12 " style={{ width: "18rem", height: "auto", backgroundColor: "#FFF8E7" }}>
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
                                <button href="#" className="btn btn-success px-4">
                                    Buy
                                </button>
                                <button href="#" className="btn btn-warning px-4" onClick={()=>CardAdd(pro)}>
                                    Card
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;



/* <div className="card rounded-5"  style={{ width: "18rem", backgroundColor:"#FFF8E7" }}>
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top rounded-top-5" alt="..." />
                <div className="card-body" style={{height:"13rem" }}>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card’s content.
                    </p>
                    <a href="#" className="btn btn-success px-4">
                        Buy
                    </a>
                </div>
            </div> */