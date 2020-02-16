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

    componentDidMount() {
        getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            });
    }

    render() {

        let { books } = this.state;
        return (
            <div className="App">
                {this.state.showSearchPage ? (
                    <SearchBarComponent/>
                ) : (
                    <Library books={books}/>
                )
                }
            </div>
        );
    }

}

export default MyReadApp;
