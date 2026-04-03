import { useEffect, useState } from "react";
import "../home/home.css"; //Add Home CSS page.
import axios from "axios"; // axios is handle the AIP resposce 
import Product from "../Product/Product"; // impoprt product.jsx 

const Home = () => { // create home function.
    const [products, setProducts] = useState([]); //create products name variable mean state to store the value.
    const [qty,setqty] = useState(1);
    useEffect(() => { // to this Api note rerender tht its ude to useEffect.
        productAPI();
    }, []);

    // async function productAPI() {
    //     const res = await fetch("https://dummyjson.com/products");
    //     const data = await res.json();
    //     setProducts(data.products);
    // }
    const productAPI = async () => {
        const res = await axios.get("https://dummyjson.com/products")
        setProducts(res.data.products)
    }
    const qtys = ()=>{

    }

    const CardAdd = (pro,i) => {
        console.log("bhai bhai")
        const cardlist = JSON.parse(localStorage.getItem("card")) || [];
        if(cardlist.name){
            setqty(qty++)
        }
        cardlist.push(pro)
        console.log(cardlist)
        localStorage.setItem("card", JSON.stringify(cardlist));
    }
    return (
        <div className="container d-grid mt-5">
            <div className="d-flex justify-content-center py-5 row gap-5">
                {products.map((pro, i) => (<Product key={i} index = {i} name={pro.title} image={pro.images[0]} dec = {pro.description} price = {pro.price} qty = {qty} addtocard = {CardAdd} />))}
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