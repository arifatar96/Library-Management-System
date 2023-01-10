import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadBook = () => {
    let params = useParams()
    let [books, setBooks] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(`http://localhost:1000/books/${params.id}`);
      let data = await response.json();
      setBooks(data);
    };
    fetchData();
  },[]);

    return ( 
        <div className="readBook">
            <h1>{books.title}</h1>
            <h4>Short Description:-</h4>
            <p>{books.shortDescription}</p>
            <hr />
            <h4>Long Description:-</h4>
            <p>{books.longDescription}</p>
        </div>
     );
}
 
export default ReadBook;