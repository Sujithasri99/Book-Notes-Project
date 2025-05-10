import React from "react";


function BookItem(props) {
    return (
        <div className="book-card">
            <p className="book-title">{props.title}</p>
            <p className="book-author">{props.author}</p>
            {props.coverImgUrl && <img src={props.coverImgUrl} alt={props.title} />}
            <p>Rating: {props.rating}</p>
            <p>Notes: {props.notes}</p>
        </div>

    );
}

export default BookItem;