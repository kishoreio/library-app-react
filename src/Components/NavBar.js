import React,{ Component } from 'react';
import {Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

class NavBar extends Component{
    state = {
        search: ""
    }

    onChangeEvent = (e) => {
        this.setState({
            search: e.target.value
        })
        this.props.filterBooks(this.state.search)
    }

    render(){
        const count = this.props.cart.length
    return(
        <div>
            <Navbar bg="primary" variant="dark">
                <img
                alt="logo"
                src="https://i.pinimg.com/originals/2c/fc/93/2cfc93d7665f5d7728782700e50596e3.png"
                width="30"
                height="30"
                className="d-inline-block align-top" />
                <NavLink to="/library-react-app/"><Navbar.Brand>Library</Navbar.Brand></NavLink>
                <Nav className="mr-auto"></Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.onChangeEvent}/>
                </Form>
                <NavLink to="/cart"><Button variant="outline-light" outline>Cart: {count}</Button></NavLink>
            </Navbar>
        </div>
    )
    }
}
export default NavBar;