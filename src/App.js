import React, {Component} from 'react';
import {Route } from 'react-router-dom';
import SearchBarComponent from "./components/SearchBarComponent";
import Library from "./components/Library";
import {getAll, search, update} from './BooksAPI';

class MyReadApp extends Component {
    state = {
        books: [],
        books_search: []
    };

    constructor(props){
        super();

        this.handleBookShelfChange = this.handleBookShelfChange.bind(this);
        this.getAllBooks = this.getAllBooks.bind(this);
        this.searchBook = this.searchBook.bind(this);
    }

    componentDidMount() {

        this.getAllBooks();
    }


    searchBook(query) {
        if (query && query !== '') {

            search(query)
                .then((books) => {
                    if (books !== undefined && books.length > 0) {
                        this.setState({ books_search: this.verifyBooks(books) });
                    }
                }).catch(books => {
                    console.log(books)
                })
        }else{
            this.setState({ books_search: []});
        }
    }

    verifyBooks = booksFromSearch => {
        const booksVerified = booksFromSearch.map(bookFromSearch => {
            this.state.books.forEach(bookOnShelf => {
                if (bookFromSearch.id === bookOnShelf.id) {
                    bookFromSearch.shelf = bookOnShelf.shelf;
                }
            });
            return bookFromSearch;
        });
        return booksVerified;
    };

    getAllBooks = () =>{

        getAll()
            .then((books) => {
                if (books !== undefined && books.length > 0) {
                    this.setState(() => ({
                        books
                    }))
                }
            });
    };

    handleBookShelfChange(event, book ){
        let newShelf=event.target.value
        update(book, newShelf)
            .then(()=> {
                book.shelf = newShelf;
                this.setState(state => ({
                    books: state.books.filter(b => b.id !== book.id).concat([book]),
                }));
            });
    }


    render() {

        return (
            <div className="App">
                <Route path="/search" render={(history) => (
                        <SearchBarComponent
                            closeSearch={this.closeSearch}
                            searchBook={this.searchBook}
                            books_search={this.state.books_search}
                            handleBookShelfChange={this.handleBookShelfChange}
                        />
                    )}
                />
                <Route exact path="/" render={() => (
                    <Library books={this.state.books}
                             openSearch={this.openSearch}
                             handleBookShelfChange={this.handleBookShelfChange}/>
                    )}
                />
            </div>
        );
    }

}

export default MyReadApp;
