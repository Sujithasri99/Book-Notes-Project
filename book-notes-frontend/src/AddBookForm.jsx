import React, {useState} from "react";
import axios from "axios";

function AddBookForm() {
    const [book, setBook] = useState({
        title : "",
        author : "",
        coverImgUrl : "",
        rating : "",
        notes : ""
    });

    function handleChange(event){
        const {name, value} = event.target;
        setBook(prevBook => {
            return {
                ...prevBook,
                [name] : value
            };
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        axios.post("http://localhost:3000/api/books", book);
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} name="title" placeholder="Title" value={book.title} />
                <input onChange={handleChange} name="author" placeholder="Author" value={book.author} />
                <input onChange={handleChange} name="coverImgUrl" placeholder="CoverURL" value={book.coverImgUrl} />
                <input onChange={handleChange} name="rating" placeholder="Rating" value={book.rating} />
                <input onChange={handleChange} name="notes" placeholder="Notes" value={book.notes} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default AddBookForm;