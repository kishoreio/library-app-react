import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class CheckOut extends Component{
    state = {
        book: this.props.book,
        cart: []
    }

    finalCart = (arr,book) => {
        for( let i = 0; i < arr.length; i++){
            let temp = arr[i] - 1
            book[temp].availability = false
            this.setState({
                book
            })
        }
        this.props.resetStateToApp()
        
    }

    render(){
        return(
            <div>
                <NavLink to="/library-app-react/"><Button style={{float:"right"}} variant="outline-primary" onClick={() => {this.finalCart(this.props.cart,this.state.book)}}>Proceed To CheckOut</Button></NavLink>
            </div>
        )
    }
}
export default CheckOut;