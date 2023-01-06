import React, { useEffect, useState } from 'react'
import Card from './Card';
import Header from './Header';
import "./Home.css"

function Home() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    const api_key = "UNyfisUdSCC84i64wq2MnbzjiLwjkvye";

    function fetchBooks() {
        fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=" + api_key)
            .then(resp => resp.json())
            .then(json => {
                setBooks(json.results.books)
        });
    }

    function checkBooks(text){
        if(text !== ""){
            let found = false
            books.forEach(function(book){
                if(search.toLowerCase() === book.title.slice(0, search.length).toLowerCase()){
                    found = true;
                }
            })
            if(!found){
                return false
            } else return true
        } else {
            return true
        }
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    return (
        <>
            <Header search={search} setSearch={setSearch} />
            <div className='main-container'>
                {   
                    (checkBooks(search))
                    ? books.map(function(book){
                        if(search.toLowerCase() === book.title.slice(0, search.length).toLowerCase()){
                            return (
                                <Card image={book.book_image} title={book.title} author={book.author} />
                            )
                        }
                    })
                    : <h1>No Results Found.</h1>
                    
                } 
            </div> 
        </>
    )
}

export default Home
