const Input = () => {
    return (<>
        <div className="d-flex flex-column justify-content-center align-items-center " style={{ width: "100%", height: "40vh",backgroundColor:"#1A1A24" }}>
            <div className="text-light fs-1 rounded-5 bg-white text-black px-4 py-1 d-flex justify-content-center align-items-center">
                Book App
            </div>
            <div className="d-flex justify-content-center gap-3 mt-5" style={{width:"100%",height:"auto"}}>
                <input style={{ width: "20%", height: "92%", padding: "10px" }} type="text" placeholder="Enter The Book Name" className="rounded-4 border-0" />
                <input style={{ width: "20%", height: "92%", padding: "10px" }} type="text" placeholder="Enter The Book Author Name" className="rounded-4 border-0" />
            </div>
            <div style={{ width: "100%", height: "50" }} className="d-flex justify-content-center mt-3">

                <button className="btn btn-primary d-flex  align-items-center rounded-4">Add Book</button>
            </div>

        </div>

    </>)
};

export default Input;