import { useEffect, useState } from "react";
import '../styles/bookList.css'
import { useNavigate } from "react-router-dom";
import ReadBook from "./readBook";

const BookList = () => {
  let [books, setBooks] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:1000/books");
      let data = await response.json();
      setBooks(data);
    };
    fetchData();
  }, [books]);

  let handleDelete = (id, title) => {
    fetch(`http://localhost:1000/books/${id}`,{
      method:'DELETE'
    })
    alert(`${title} will be deleted permanently`)
  };

  let navigate = useNavigate()
  let read = (id) => {
    navigate(`/admin/booklist/${id}`)
   
  }
 
  return (
    <div className="bookslist">
      <h1>Book List:{books.length}</h1>
      
      <div className="bookSection">
        {books.map((data) => (
          <div className="box">
          <div className="book">
            <div className="img1">
              <img src={data.thumbnailUrl} alt="" />
            </div>
            <div className="bookdisp">
              <h2> Title: {data.title}</h2>
              <h3>Authors: {data.authors.toString()}</h3>
              <h4>Categories: {data.categories.toString()}</h4>
              <h5>Pages: {data.pageCount}</h5>
              
              <button 
              onClick={() => read(data.id)}
              className="btn1">
                Read More
              </button>
              <button
                onClick={() => handleDelete(data.id, data.title)}
                className="btn2">
                Delete
              </button>
            </div>
           
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
