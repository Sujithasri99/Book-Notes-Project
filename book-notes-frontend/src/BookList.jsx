import React, {useState, useEffect} from "react";
import axios from "axios";
import BookItem from "./BookItem";

function BookList() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
       axios.get('http://localhost:3000/api/books')
       .then(response => {
            console.log("API response" + response.data);
            setBooks(response.data);
       })
       .catch(error => console.error("Error fetching book:", error));
    }, []);

    return (
        <div className="book-list">
            {books && books.map((bookItem, index) => {
                return (
                    <BookItem 
                        key={bookItem._id || index}
                        id={index}
                        title={bookItem.title}
                        author={bookItem.author}
                        coverImgUrl={bookItem.coverImgUrl}
                        rating={bookItem.rating}
                        notes={bookItem.notes}
                    />
                );
            })}      
        </div>
    );

}

export default BookList;