import React from 'react';
import '../App.css';
import BookComponent from "./BookComponent";

function BookshelfComponent({title, booksFiltered}) {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {booksFiltered.map((book) => (
                        <li key={book.id}>
                            <BookComponent book={book}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default BookshelfComponent;
