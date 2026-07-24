import { useEffect, useState } from "react";
import axios from "axios";
import Input from "./input";
const Frame = () => {
    const [notes, setNotes] = useState([]);
    const [book, setBook] = useState({});

    const handlebook = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/get");
            setNotes(res.data.result);
        } catch (err) {
            console.log(err);
        }
    };
    const deletebook = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/api/delete/${id}`);
            setNotes(notes.filter((note) => note._id !== id));
        } catch (err) {
            console.log(err);
        }
        // console.log(id);
    }
    const updatebook = async (title, author, id,price,category,publiceyear) => {
        const newTitle = prompt("Enter new title");
        const newAuthor = prompt("Enter new author");
        const newprice = prompt("Enter the price");
        const newcategory = prompt("Enter the category");
        const newpublicyear = prompt("Enter the year");
        await axios.put(`http://localhost:3000/api/update`, {id, title: newTitle || title, author: newAuthor || author, price: newprice || price , category: newcategory || category ,publiceyear: newpublicyear || publiceyear});
        handlebook();
    }
    useEffect(() => {
        handlebook();
    }, []);
    return (<>
        <div>
            <Input />
        </div>
        <div style={{ backgroundColor: "#1A1A24", minHeight: "100vh", padding: "40px 20px" }}>
            <div className="container">
                <h2 className="text-white text-center mb-5">📚 Books Collection</h2>
                <div className="row g-4">
                    {
                        notes.map((note) => (
                            <div key={note._id} className="col-lg-4 col-md-6 col-sm-12">
                                <div className="card h-100 shadow-lg rounded-4" style={{ backgroundColor: "#F7F9FA", border: "none" }}>
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-dark fw-bold mb-2">{note.title}</h5>
                                        <p className="card-text text-muted">
                                            <strong>Author:</strong> {note.author}
                                        </p>
                                        <p className="card-text text-muted">
                                            <strong>Price:</strong> ₹{note.price}
                                        </p>
                                        <p className="card-text text-muted">
                                            <strong>Category:</strong> {note.category}
                                        </p>
                                        <p className="card-text text-muted">
                                            <strong>Year:</strong> {note.publiceyear}
                                        </p>
                                        <div className="d-flex gap-2 mt-auto">
                                            <button className="btn btn-danger flex-grow-1 rounded-3" onClick={() => deletebook(note._id)}>Delete</button>
                                            <button className="btn btn-warning flex-grow-1 rounded-3" onClick={() => updatebook(note.title, note.author, note._id)}>Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
    )
};
export default Frame;