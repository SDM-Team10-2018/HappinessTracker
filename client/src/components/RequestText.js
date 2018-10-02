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
import { connect } from 'react-redux';
import { addEmotions } from '../actions/emotionActions';
import PropTypes from 'prop-types';


class RequestText extends Component {
    componentDidMount(){
        this.props.addEmotions();
    }

  

    render() {
        const { messages } = this.props;
        return(
            <div>
                <Container>
                <Grid>  
                    <Row>
                    <h1>Please enter your happines level:</h1>
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

                    <Row>
                    <h1>Please enter your team's happines level:</h1>
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


                    <Row>
                        <Col align = "center" xs={12} sm={12}>
                            <Button
                                color='dark'
                                style={{marginBottom:'2rem'}}
                                onClick={this.submit}
                                block
                            >Submit</Button>
                        </Col>
                    </Row>
                    <Row>
                    <Col align='center'>
                       <h3> {this.props.messages} </h3>
                    </Col>
                    </Row>
                </Grid>
                </Container>
           
                
            </div>
        );
        
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

                        const newEmotion = this.state.individualHappiness + " " 
                        + this.state.teamHappiness;
                        const add = [
                            { emo: 'happy'},
                            { emo: 'sad'}
                        ]

                        
                        this.props.addEmotions(add);
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
    emotions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    emotions: state.emotions
});


export default connect(mapStateToProps, { addEmotions })(RequestText);