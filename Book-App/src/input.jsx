import axios from "axios";
import { createContext, useState } from "react";

const BookContext = createContext();

const Input = () => {
    const [book, setBook] = useState({});

    const handleaddbook = async () => {
        const res = await axios.post("http://localhost:3000/api/addbook", book);
        if (res.status === 200) {
            alert(res.data.message);
            setBook({ title: "", author: "" });
        } else {
            alert(res.data.message);
        }
    }

    return (<>
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: "100%", height: "auto", backgroundColor: "#1A1A24", padding: "30px 0" }}>
            <div className="text-light fs-1 rounded-5 bg-white text-black px-5 py-2 d-flex justify-content-center align-items-center mb-4">
                Book App
            </div>
            
            <div className="row w-75 g-3">
                <div className="col-md-6">
                    <input onChange={(e) => setBook({ ...book, title: e.target.value })} type="text" placeholder="Book Title" className="form-control rounded-3 p-3" />
                </div>
                <div className="col-md-6">
                    <input onChange={(e) => setBook({ ...book, author: e.target.value })} type="text" placeholder="Author Name" className="form-control rounded-3 p-3" />
                </div>
                <div className="col-md-6">
                    <input onChange={(e) => setBook({ ...book, price: e.target.value })} type="number" placeholder="Price" className="form-control rounded-3 p-3" />
                </div>
                <div className="col-md-6">
                    <input onChange={(e) => setBook({ ...book, category: e.target.value })} type="text" placeholder="Category" className="form-control rounded-3 p-3" />
                </div>
                <div className="col-md-12">
                    <input onChange={(e) => setBook({ ...book, publiceyear: e.target.value })} type="number" placeholder="Publish Year" className="form-control rounded-3 p-3" />
                </div>
            </div>

            <div className="mt-4">
                <button onClick={handleaddbook} className="btn btn-primary btn-lg rounded-3 px-5">Add Book</button>
            </div>

        </div>

    </>)
};

export default Input;