import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {Alert, Table} from 'react-bootstrap';
import CheckOut from './CheckOut';

class Cart extends Component{
    state = {
        cart: this.props.cart
    }

    removeFromCart(id){
        for( let i = 0; i < this.props.cart.length; i++){ 
            if ( this.props.cart[i] === id) {
              this.props.cart.splice(i, 1);
              this.setState({
                  cart: this.state.cart
              })
            }
         }
         this.props.updateCart(this.state.cart)
    }

    resetStateToApp = () => {
        this.props.resetCartState()
    }

    render(){

        const lists = this.props.book.filter(l => {
            return l.id === this.state.cart[0] || l.id === this.state.cart[1] || l.id === this.state.cart[2]
        })

        const result = lists.map(li => {
            return(
                <div key={li.id}>
                    <Table responsive>
                        <tbody>
                            <tr>
                            <td><img src={li.img} width="70px" height="120px" alt="book"/></td>
                            <td>{li.title}</td>
                            <td>{li.author}</td>
                            <td>{li.genre}</td>
                            <td>{li.yop}</td>
                            <td><Button style={{float: "right"}} onClick={() => this.removeFromCart(li.id)}>Remove</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            )
        })

        const length = Math.abs(this.state.cart.length - 3)

        return(
            <div>
                <Alert variant="success" style={{textAlign: "center"}}>You can add {length} book to your cart</Alert>
                {result}
                <CheckOut book={this.props.book} cart={this.state.cart} resetStateToApp={this.resetStateToApp}/>
            </div>
        )
    }
}
export default Cart;