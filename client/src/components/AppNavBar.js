import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavBar extends Component {
    // Nagigation bar status
    state = {
        isOpen: false
    }

    // [Future Sprint] - Navigation Bar toggle
    toggle = () => {
        this.setState({
            isOpen : !this.state.isOpen
        });
    }

    // Navigation bar and log out option [Future Implementation] for the application
    render() {
        return(
            <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Howz It Going</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}></NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Logout</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>    
                </Container>
            </Navbar>
            </div>
        );
        
    }
}


export default AppNavBar;