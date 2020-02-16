import React from 'react';
import '../App.css';
import BookComponent from "./BookComponent";

function BookshelfComponent() {

    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <li>
                        <BookComponent />
                    </li>
                    <li>

                    </li>
                </ol>
            </div>
        </div>
    )
}

export default BookshelfComponent;
