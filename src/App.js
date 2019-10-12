import React,{ Component } from 'react';
import NavBar from './Components/NavBar';
import Books from './Components/Books';
import axios from 'axios'
import Cart from './Components/Cart';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component{
  state = {
    books: [],
    cart: [],
    search: ""
  }

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/kishorecodes/jsonserver/books')
      .then(response => {
        console.log(response.books)
        this.setState({
          books: response.data
        })
      })
  }

  addToCart = id => {
    const count = this.state.cart.length
    if(count < 3){
    this.setState({
      cart: [...this.state.cart,id]
    })
    
  } else {
    alert("Maximum three books allowed per user.Proceed to Checkout")
  }
}

  resetCartState = () => {
    this.setState({
      cart: []
    })
  }

  updateCart = (arr) => {
    this.setState({
      cart: arr
    })
  }
  
  filterBooks = (result) => {
    this.setState({
      search: result
    })
  }

  render() {
    return (
      <Router>
      <div>
        <NavBar cart={this.state.cart} filterBooks={this.filterBooks}/>
        <Route exact path="/" render={() => (<Books book={this.state.books} addToCart={this.addToCart} searched={this.state.search} />)} />
        <Route path="/cart" render={() => (<Cart cart={this.state.cart} book={this.state.books} updateCart={this.updateCart} resetCartState={this.resetCartState} />)}/>
      </div>
      </Router>
    )
  }
}
export default App;
