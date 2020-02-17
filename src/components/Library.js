import React, {Component} from 'react';
import '../App.css';
import BookshelfComponent from "./BookshelfComponent";

class Library extends Component {

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookshelfComponent
                        booksFiltered={this.props.books.filter((b) => b.shelf === 'currentlyReading')}
                        title={'Currently Reading'}
                    />
                    <BookshelfComponent
                        booksFiltered={this.props.books.filter((b) => b.shelf === 'read')}
                        title={'Read'}
                    />

                    <BookshelfComponent
                        booksFiltered={this.props.books.filter((b) => b.shelf === 'currentlyReading')}
                        title={'Want To Read'}
                    />

                </div>
                <div className="open-search">
                    <a onClick={this.props.openSearch}>Add a book</a>
                </div>
            </div>
        );
    }

}

export default Library;
