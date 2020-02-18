import React, {Component} from 'react';
import SearchBarComponent from "./components/SearchBarComponent";
import Library from "./components/Library";
import {getAll, get, search, update} from './BooksAPI';

class MyReadApp extends Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false,
        books: []
    };

    constructor(props){
        super();

        this.openSearch = this.openSearch.bind(this);
        this.closeSearch = this.closeSearch.bind(this);
        this.handleBookShelfChange = this.handleBookShelfChange.bind(this);
        this.getAllBooks = this.getAllBooks.bind(this);
    }

    componentDidMount() {
        this.getAllBooks();
    }

    getAllBooks = () =>{
        getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            });
    };

    openSearch() {
        this.setState({
            showSearchPage: !this.state.showSearchPage
        })
    }
    closeSearch() {
        this.setState({
            showSearchPage: !this.state.showSearchPage
        })
    }
    handleBookShelfChange(event, book ){
        update(book, event.target.value)
            .then(() => {
                this.getAllBooks()
            });
    }


    render() {

        let { books } = this.state;
        return (
            <div className="App">
                {this.state.showSearchPage ? (
                    <SearchBarComponent closeSearch={this.closeSearch}/>
                ) : (
                    <Library books={books}
                             openSearch={this.openSearch}
                             handleBookShelfChange={this.handleBookShelfChange}/>
                )
                }
            </div>
        );
    }

}

export default MyReadApp;
