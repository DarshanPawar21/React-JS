import { useEffect, useState } from "react";
import axios from "axios";
import Input from "./input";
const Frame = () => {
    const [notes, setNotes] = useState([]);


    const handlebook = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/get");
            setNotes(res.data.result);
            console.log(res.data.result);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        handlebook();
    }, []);
    return (<>
        <div>
            <Input />
        </div>
        <div style={{ width: "100%", height: "60vh", backgroundColor: "#1A1A24", color: "black" }} className="d-flex flex-column gap-3  align-items-center text-center">
            {
                notes.map((note) => (
                    <div key={note._id} className="align-content-center text-center rounded-5" style={{ width: "60%", height: "19%", backgroundColor: "#F7F9FA" }}>
                        <h1>{note.title}</h1>
                        <span className="align-content-center">Author: {note.author}</span>
                    </div>
                ))
            }
        </div>
        </>
    )
};
export default Frame;


{/* <div className="align-content-center text-center rounded-5" style={{width:"60%",height:"14%",backgroundColor:"#F7F9FA"}}>
            
        </div> */}