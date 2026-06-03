import { useState, useEffect } from "react";
import axios from "axios";
const Coin_home = () => {

    const [book, setbook] = useState([]);
    const [serach, setsearch] = useState("");
    const [show, setshow] = useState(null);
    // const [click,setclick] = useState(false);
    // console.log(book)
    useEffect(() => {
        getbook();
        // findbook();
    }, [])

    const getbook = async () => {
        const res = await axios.get("https://www.googleapis.com/books/v1/volumes?q=your_search_query&key=AIzaSyAdSi7WSOqo8UQj9_4F9NuEonBSs3QJsdM");
        setbook(res.data.items);
        // console.log(res.data.items)
    }

    const findbook = (idbook) => {
        const match = book.find((b) => b.volumeInfo.title === idbook);
        if (match) {
            alert("Book Found !");
            setshow(match);
            localStorage.setItem("books", JSON.stringify(match));
            setsearch(" ");
        } else {
            alert("Books is not found !");
        }
    }

    return (<>

        <div className="container-fluid mt-5 mb-5">
            <div className="d-flex justify-content-center align-items-center gap-4" style={{width:"100%"}}>
                <label htmlFor="text" className="h3">Search Books:</label>
                <input type="text" className="form-control" placeholder="Search Books..." style={{width:"20%",height:"50px"}} onChange={(e) => setsearch(e.target.value)} />
                <button className="btn btn-primary" style={{width:"200px"}} onClick={() => findbook(serach)}>Search</button>
            </div>
        </div>
        {
            show && (
                <div>
                    <h1>{show.volumeInfo.title}</h1>
                    <p>{show.volumeInfo.description}</p>
                </div>
            )
        }
        <hr />
        {
            book.map((book) => (
                <div className="container-fluid px-3 my-4">
                    <div className="row g-4">
                        <div key={book.id} className="col-12">
                            <div className="card shadow-sm border-0 overflow-hidden h-100 p-3">
                                <div className="d-flex flex-column flex-md-row gap-4 align-items-start align-items-md-center">
                                    <div className="mx-auto mx-md-0" style={{ flexShrink: 0 }}>
                                        <img
                                            src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/200x250?text=No+Cover"}
                                            className="rounded shadow-sm object-fit-cover"
                                            style={{ width: "180px", height: "240px" }}
                                            alt={book.volumeInfo.title}
                                        />
                                    </div>

                                    <div className="card-body p-0 flex-grow-1">
                                        <h4 className="card-title fw-bold text-dark mb-2">
                                            {book.volumeInfo.title}
                                        </h4>
                                        {book.volumeInfo.authors && (
                                            <h6 className="text-muted mb-3">
                                                By: {book.volumeInfo.authors.join(", ")}
                                            </h6>
                                        )}
                                        <p className="card-text text-secondary mb-4" style={{ lineHeight: "1.6" }}>
                                            {book.volumeInfo.description
                                                ? `${book.volumeInfo.description.substring(0, 250)}...`
                                                : "No description available for this book."}
                                        </p>

                                        <a
                                            href={book.volumeInfo.infoLink}
                                            className="btn btn-primary px-4 py-2 fw-semibold shadow-sm"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Learn More
                                        </a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))
        }
    </>)
}
export default Coin_home;

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}