import React from "react";
import BookList from "./BookList";
import AddBookForm from "./AddBookForm";


function App() {
    return (
        <div> 
            <h1>Book Notes App</h1>
            <AddBookForm />
            <BookList />
        </div>
    );
}

export default App;