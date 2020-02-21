import React, {Component} from 'react';
import BookShelfSearch from "./BookshelfSearch";
import {Link} from 'react-router-dom';

class SearchBarComponent extends Component {
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text"
                               placeholder="Search by title or author"
                               onChange={ e => this.props.searchBook(e.target.value)}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <BookShelfSearch
                        books_search={this.props.books_search}
                        books={this.props.books}
                        handleBookShelfChange={this.props.handleBookShelfChange}
                    />
                </div>
            </div>
        );
    }

}

export default SearchBarComponent;
