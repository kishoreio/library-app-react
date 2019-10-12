import React, { Component } from 'react';
import { Media, Button } from 'reactstrap';
import {Badge} from 'react-bootstrap';

class Books extends Component{
    render() {
        const { book,searched } = this.props
        const fullDate = new Date()
        const date = fullDate.getDate() + 3
        const month = fullDate.getMonth() + 1
        const year = fullDate.getFullYear()
        const filterBook = book.filter(l => {
            return l.title.toLowerCase().includes(searched.toLowerCase()) ||
                   l.author.toLowerCase().includes(searched.toLowerCase()) || 
                   l.genre.toLowerCase().includes(searched.toLowerCase()) ||
                   l.yop.toString().includes(searched.toString()) ||
                   !l
          })
        const booksList = filterBook.map(book => {
            return(
                <div key={book.id}>
                    <Media>
                        <Media left>
                            <Media 
                            src={book.img} 
                            alt="book" />
                        </Media>
                        <Media body>
                            <Media heading>{book.title}</Media>
                            <Media>Genre: {book.genre}</Media><br />
                            <Media>Written By: {book.author}</Media><br />
                            <Media>Published on: {book.yop}</Media><br />
                            {(book.availability === true) ? 
                            <Badge pill variant="success">Available</Badge> 
                            : 
                            <Badge pill variant="danger">Not Available. Only Available on {date}/{month}/{year}</Badge>
                            }<br />
                            {(book.availability === true) ? <Button color="primary" onClick={() => this.props.addToCart(book.id)}>Add To Cart</Button> : null}
                        </Media>
                    </Media>
                    <hr style={{border: "1px dashed black"}}/>
                </div>
            )
        })
        return (
            <div>
                {booksList}
            </div>
        )
    }
}
export default Books;