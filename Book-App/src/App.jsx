import axios from "axios";
import { useEffect, useState } from "react";
const App = () => {
  const [books, setBooks] = useState({});
  const handlebook = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/get");
      setBooks(res.data.books)
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handlebook();
  }, []);
  return (<>
    {
      books.map((book, i) => {
        <h1 key={i}>{book.title}</h1>
      })
    }
  </>)
};
export default App;