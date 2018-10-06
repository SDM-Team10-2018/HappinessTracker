import React, { Component } from 'react';
import { Container , Button, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import { Grid, Image} from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import VerySad from '../images/VerySad.jpg';
import Sad from '../images/Sad.jpg';
import Meh from '../images/Neutral.jpg';
import Happy from '../images/Happy.jpg';
import VeryHappy from '../images/VeryHappy.jpg';
import Empty from '../images/Empty.jpg';
import { connect } from 'react-redux';
import { addEmotions } from '../actions/emotionActions';
import PropTypes from 'prop-types';
import Notifier from "react-desktop-notification";


class RequestText extends Component {
    gotNewNotification() {
        //Here will pop a notifier and always open in a new window when clicked.
        //Notifier.start(
        //  "Happiness Tracker",
        //  "Jonathan",
        //  "www.google.com",
        //  "validated image url"
        //);
        Notifier.start(
            "Happiness Tracker",
            "Please log in your input in Happiness Tracker",
            "https://glacial-citadel-91690.herokuapp.com/"
          );
    
    }


    componentDidMount(){
        //this.props.addEmotions();
        this.setState({
            individualHappiness : 'undefined',
            teamHappiness: 'undefined',
            message: ''
        })
        this.render();
        setTimeout(this.gotNewNotification, 10000);
    }
    render() {
        const { messages } = this.props;
        return(
            <div>
                <Container>
                <Grid>  
                    <Row>
                    <h4>Please enter your happines level:</h4>
                    </Row>
                    <Row>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            id="VS"
                            width="100px" height="100px"
                            src={VerySad}  
                            circle
                            onClick = { () => {
                                this.setState({
                                    individualHappiness: 'VerySad'});}}
                            ></Image>
                        <h5>Very Sad</h5>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            src={Sad} 
                            circle
                            onClick = { () => {
                                this.setState({
                                    individualHappiness: 'Sad'});}}
                            ></Image>
                        <h5>Sad</h5>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            src={Meh}  
                            circle
                            onClick = { () => {
                                this.setState({
                                    individualHappiness: 'Neutral'});}}
                            ></Image>
                        <h5>Meh</h5>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            src={Happy} 
                            circle
                            onClick = { () => {
                                this.setState({
                                    individualHappiness: 'Happy'});}}
                            ></Image>
                        <h5>Happy</h5>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            src={VeryHappy}  
                            circle
                            onClick = { () => {
                                this.setState({
                                    individualHappiness: 'VeryHappy'});}}
                            ></Image>
                        <h5>VeryHappy</h5>
                        </Col>
                    </Row>
                    <Row><Col><Image height="50px" src={Empty}></Image></Col></Row>

                    <Row>
                    <h4>Please enter your team's happines level:</h4>
                    </Row>
                    <Row>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            id="VS"
                            width="100px" height="100px"
                            src={VerySad}  
                            circle
                            onClick = { () => {
                                this.setState({
                                    teamHappiness: 'VerySad'});}}
                            ></Image>
                        <h5>Very Sad</h5>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            src={Sad} 
                            circle
                            onClick = { () => {
                                this.setState({
                                    teamHappiness: 'Sad'});}}
                            ></Image>
                        <h5>Sad</h5>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            src={Meh}  
                            circle
                            onClick = { () => {
                                this.setState({
                                    teamHappiness: 'Neutral'});}}
                            ></Image>
                        <h5>Meh</h5>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            src={Happy} 
                            circle
                            onClick = { () => {
                                this.setState({
                                    teamHappiness: 'Happy'});}}
                            ></Image>
                        <h5>Happy</h5>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            src={VeryHappy}  
                            circle
                            onClick = { () => {
                                this.setState({
                                    teamHappiness: 'VeryHappy'});}}
                            ></Image>
                        <h5>VeryHappy</h5>
                        </Col>
                    </Row>
                    <Row><Col><Image height="50px" src={Empty}></Image></Col></Row>

                    <Row>
                        <Col align = "center" xs={12} sm={10}>
                            <Button
                                color='dark'
                                style={{marginBottom:'2rem'}}
                                onClick={this.submit}
                                block
                            >Submit</Button>
                        </Col>
                    </Row>
                    <Row>
                    <Col align='right' xs={12} sm={10}>
                        <ListGroup>
                            <ListGroupItem color='dark' onClick={this.postponed}>Click here to postpone...</ListGroupItem>
                        </ListGroup>
                    </Col>
                    </Row>
                </Grid>
                </Container>
           
                
            </div>
        );
        
    }

    postponed = () => {
        confirmAlert({
            message: 'Please select postpone time:',
            buttons: [
                {
                    label: '5 Minutes',
                    onClick: () => {
                        this.setState({postponedFor: '5'});
                    }
                },
                {
                    label: '10 Minutes',
                    onClick: () => {
                        this.setState({postponedFor: '10'});
                    }
                },
                {
                    label: '20 Minutes',
                    onClick: () => {
                        this.setState({postponedFor: '20'});
                    }
                }
            ]
        })
    }

    submit = () => {
        confirmAlert({
            message: 'Are you sure you want to submit these responses?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        this.setState({confirmed: 'true'});
                        this.setState({messages: 'Thank You!'});

                        this.props.addEmotions(this.state.individualHappiness,this.state.teamHappiness);
                        
                        }
                        
                },
                {
                    label: 'Cancel',
                }
            ]
        }

        )
    }

}


RequestText.propTypes = {
    addEmotions: PropTypes.func.isRequired,
    emotions: PropTypes.object.isRequired,
    emotion2: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    emotions: state.individualHappiness,
    emotion2: state.teamHappiness
});


export default connect(mapStateToProps, { addEmotions })(RequestText);