import React from 'react';
import PropTypes from 'prop-types';
import BookComponent from './BookComponent';

function BookShelfSearch (props) {
    const { books_search, handleBookShelfChange } = props;

    return(
        <div className="search-books-results">
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books_search.map(book =>
                        <li key={book.id}>
                            <BookComponent
                                book={book}
                                handleBookShelfChange={(book, shelf) => {
                                    handleBookShelfChange(book, shelf);
                                }}
                            />
                        </li>,
                    )}
                </ol>
            </div>
        </div>
    );
}

BookShelfSearch.propTypes = {
    books_search: PropTypes.array.isRequired,
    handleBookShelfChange: PropTypes.func.isRequired,
};

export default BookShelfSearch;
