import { useEffect, useState } from "react";
import "../home/home.css"; //Add Home CSS page.
import axios from "axios"; // axios is handle the AIP resposce 
import Product from "../Product/Product"; // impoprt product.jsx 

const Home = () => { // create home function.
    const [products, setProducts] = useState([]); //create products name variable mean state to store the value.
    const [qty, setqty] = useState(1);
    useEffect(() => { // to this Api note rerender tht its ude to useEffect.
        productAPI();
    }, []);
    const [search, setsearch] = useState("")

    // async function productAPI() {
    //     const res = await fetch("https://dummyjson.com/products");
    //     const data = await res.json();
    //     setProducts(data.products);
    // }
    const productAPI = async () => {
        const res = await axios.get("https://dummyjson.com/products")
        setProducts(res.data.products)
    }
    const qtys = () => {

    }

    const CardAdd = (pro, i) => {
        console.log("bhai bhai")
        const cardlist = JSON.parse(localStorage.getItem("card")) || [];
        const res = cardlist.findIndex((e) => e.name == pro.name)
        if (res == -1) {
            cardlist.push(pro)
        }
        if (res != -1) {
            cardlist[res].qty++;
        }
        console.log(cardlist)
        localStorage.setItem("card", JSON.stringify(cardlist));
    }
    const searchproduct = () => {
        console.log(products)
       const result = products.filter((pro)=> pro.title.toLowerCase() == search.toLowerCase())
       console.log(result)
       setProducts(result)
    }
     
    return (
        <div className="container d-grid mt-3">
            <div className="d-flex justify-content-center align-items-center gap-3 ">
                <input style={{backgroundColor:"#FFF8E7"}} className="rounded-4 p-2" onChange={(e) => setsearch(e.target.value)} type="text" /> <button style={{width:"90px",height:"38px",backgroundColor:"#FFF8E7"}} onClick={searchproduct} className="btn border-2 border-dark">Search</button>
            </div>
            <div className="d-flex justify-content-center py-5 row gap-5">
                {products.map((pro, i) => (<Product name={pro.title} image={pro.images[0]} dec={pro.description} price={pro.price} qty={qty} addtocard={CardAdd} cate={pro.category} rating={pro.rating} stock={pro.stock} />))}
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