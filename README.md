# My Bookshelf Manager
[My Bookshelf Manager](https://github.com/g0ng0n-dev/my-bookshelf-manager) is a books manager webapp that let you organize your books

## Prerequisites
  
To run this application, you will need the following:
   
   * Node.js
   * The command line
   * NPM
   
## Quickstart

In the project directory, you can run:

### Setup
Please run `npm install` or `yarn install` (depending on your preference) to 
install all dependencies.

### Running the app

Please run `npm run start` or `yarn start` to Run the application. You 
can then browse the application on your [localhost](http:://localhost:3000).

The page will reload if you make edits.<br />`
You will also see any lint errors in the console.

## How to use
### Choosing which shelf to send a book to
* When the app starts you may choose which shelf to send a book to by clicking on the green circle with a down arrow of any book.
  
### Search for a book to add to shelf
* To access the search page select the + icon located at the bottom right of the page. 
* Type in the search field for possible books to be found. 
* No results will be displayed if the input field is blank or the query you've typed does not exist.
* You can add a book to a shelf using the process described in the previous section.
* To return to the main page you may use the back arrow in the input area at the top or the browsers back arrow.
   
   
## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 

## LICENCE

MIT License

Copyright (c) 2020 my-bookshelf-manager

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

