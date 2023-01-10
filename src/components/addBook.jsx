import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/addBook.css'
const AddBook = () => {
    //title, authors, categories, pageCount, shortDescription, longDescription, thumbnailUrl
    let [title,setTitle] = useState("")
    let [categories,setCategory] = useState("")
    let [authors,setAuthor] = useState("")
    let [pageCount,setPage] = useState("")
    let [shortDescription,setShort] = useState("")
    let [longDescription,setLong] = useState("")
    let [thumbnailUrl,setUrl] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault();

        //data to be posted
        let bookData = {title, authors, categories, pageCount, shortDescription, longDescription, thumbnailUrl}

        //posting to server
        fetch('http://localhost:1000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert('book added sucessfully')
        navigate('/admin/booklist')
    }
    return ( 
        <div className="addBook">
            <h1>Add a Book</h1>
            <div className="addBookForm">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" required placeholder="title of the book" />
                    </div>
                    <div className="authors">
                    <input value={authors} onChange={(e)=>setAuthor(e.target.value)} type="text" required placeholder="authors of the book" />
                    </div>
                    <div className="categories">
                    <input value={categories} onChange={(e)=>setCategory(e.target.value)} type="text" required placeholder="categories of the book" />
                    </div>
                    <div className="pageCount">
                    <input value={pageCount} onChange={(e)=>setPage(e.target.value)} type="number" required placeholder="page count of the book" />
                    </div>
                    <div className="shortDescription">
                        <textarea value={shortDescription} onChange={(e)=>setShort(e.target.value)} required placeholder="short description" rows={3} cols={15}></textarea>
                    </div>
                    <div className="longDescription">
                        <textarea value={longDescription} onChange={(e)=>setLong(e.target.value)} required placeholder="long description" rows={7} cols={15}></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input value={thumbnailUrl} onChange={(e)=>setUrl(e.target.value)} type="text" required placeholder="thumbnail url"/>
                    </div>
                    <button className="btnAdd">Add Book</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddBook;