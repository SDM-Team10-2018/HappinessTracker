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
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen : !this.state.isOpen
        });
    }
    render() {
        return(
            <div>
            <Navbar color="dark" dark expand="sm" classname="mb-5">
                <Container>
                    <NavbarBrand href="/">Happiness Tracker</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}></NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar></Collapse>
                    <Nav classname="ml-auto" navbar></Nav>
                    <NavItem>
                        <NavLink href="/">Logout</NavLink>
                    </NavItem>
                </Container>
            </Navbar>
            </div>
        );
        
    }
}




export default AppNavBar;