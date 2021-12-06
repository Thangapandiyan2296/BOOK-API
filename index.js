// Get all books 
/*
    Route : /
    Description : Get all the books
    Access : public
    parameter : NONE
    Methods : Get
*/ 

const { json } = require("express");
const express = require("express");

const database=require("./database");

const booky = express();

booky.get("/", (req,res) => {
    return res.json({collection: database.books});
});



// Get Specified book with ISBN Number

/*
    Route : /
    Description : Get specified book
    Access : public
    parameter : isbn
    Methods : Get
*/ 

booky.get("/is/:isbn", (req,res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.ISBN === req.params.isbn
    );
    if(getSpecificBook.length === 0) {
        return res.json({
            error: `No Books found for ISBN of ${req.params.isbn}`
        });
    }
    return res.json({books: getSpecificBook});
});

// Get Books on a specific categary
/*
Route : /c
Description : get specific category book
Access : public
Parameter : Category
Methods : Get

*/

booky.get("/c/:category", (req,res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.category.includes(req.params.category)

    );
    if(getSpecificBook.length === 0) {
        return res.json({
            error: `No Books found for catagary of ${req.params.category}`
        });
    }
    return res.json({category: getSpecificBook});
});

// To list the all the books by languages

booky.get("/l/:language", (req,res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.language.includes(req.params.language)
    );
    if(getSpecificBook.length === 0) {
        return res.json({
            error: `No Books found for language of ${req.params.language}`
        });  
    }
    return res.json({language: getSpecificBook});
});

/*function name1(){
    console.log("OKay");
    
}
return(name1);*/

// GET ALL AUTHORS
booky.get("/author", (req,res) => {
    return res.json({authors: database.author});
});

// GET ALL AUTHORS BASED ON A BOOK
booky.get("/author/book/:isbn", (req,res) =>{
    const getSpecificAuthor = database.author.filter(
        (author) => author.books.includes(req.params.isbn)
    
    );
    if(getSpecificAuthor.length === 0) {
        return res.json({
        error:`No Books found ${req.params.isbn}`
    });
    }
    return res.json({Authors: getSpecificAuthor});
});


//LIST ALL THE AUTHOR BASED ON BOOKS

booky.get("/author/:book", (req,res) =>{
    const getSpecificAuthor = database.author.filter(
        (book) => author.books.includes(req.params.book)
    
    );
    if(getSpecificAuthor.length === 0) {
        return res.json({
        error:`No Authors found ${req.params.book}`
    });
    }
    return res.json({Books: getSpecificAuthor});
});

// LIST ALL PUBLICATIONS

booky.get("/publications", (req,res) => {
    return res.json({publications: database.publication});
});

booky.get("/price", (req,res) => {
    return res.json({Total_price:database.price});
});

booky.listen(4000,() => console.log("The server is running up!..."));