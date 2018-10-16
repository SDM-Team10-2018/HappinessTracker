import React, { Component } from 'react';
import { Container , Row, Col, ListGroup, ListGroupItem, Fade} from 'reactstrap';
import { Grid, Image, Button} from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import VerySad from '../images/VerySad.jpg';
import Sad from '../images/Sad.jpg';
import Meh from '../images/Neutral.jpg';
import Happy from '../images/Happy.jpg';
import VeryHappy from '../images/VeryHappy.jpg';
import GreenCheck from '../images/GreenCheck.jpg';
import { connect } from 'react-redux';
import { addEmotions } from '../actions/emotionActions';
import PropTypes from 'prop-types';
import Notifier from "react-desktop-notification";
import { link } from 'fs';


class RequestText extends Component {

    state = {
        isClicked: false,
        isPostponed: false,
        isIndDataReadyToSubmit: false,
        isTeamDataReadyToSubmit: false,
        isDataReadyToSubmit: false,
        isIndNotAtAllHappySelected: false,
        isIndNotSoHappySelected: false,
        isIndNeutralSelected: false,
        isIndHappySelected: false,
        isIndVeryHappySelected: false,
        isTeamNotAtAllHappySelected: false,
        isTeamNotSoHappySelected: false,
        isTeamNeutralSelected: false,
        isTeamHappySelected: false,
        isTeamVeryHappySelected: false
    }

    toggle = () => {
        this.setState({
            isClicked : !this.state.isClicked
        });
    }

    setSubmitReadyState = () => {
        if (this.state.isIndDataReadyToSubmit && this.state.isTeamDataReadyToSubmit){
        this.setState({
            isDataReadyToSubmit : true
        });
    }
    }

    setReminder = (timeLimit) => {
        setTimeout(this.gotNewNotification, timeLimit);
        this.setState({
            isPostponed : true
        });
    }



    gotNewNotification() {
        //Here will pop a notifier and always open in a new window when clicked.
        Notifier.start(
            "Howz It Going",
            "It's now time to enter your Happiness Information. Please click here.",
            "https://gentle-chamber-61056.herokuapp.com/"
          );
    
    }

    componentDidMount(){
        this.setState({
            team: 'team10',
            individualHappiness : 'undefined',
            teamHappiness: 'undefined',
        })
        this.render();
        //setTimeout(this.gotNewNotification, 10000);
    }

    render() {
        return(
            
            <div>
                <Container>
                <Grid> 
                    <Row>
                    <h4>Select a picture below that best represents how happy you are feeling with your work:</h4>
                    </Row>
                    <Row>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            id="VS"
                            width="100px" height="100px"
                            src={VerySad}  
                            circle
                            onClick = { () => {
                                this.setState({individualHappiness: 'NotAtAllHappy'});
                                this.setState({isIndNotAtAllHappySelected: true,
                                    isIndNotSoHappySelected: false,
                                    isIndNeutralSelected: false,
                                    isIndHappySelected: false,
                                    isIndVeryHappySelected: false,
                                    isIndDataReadyToSubmit: true
                                });
                                this.setSubmitReadyState();
                            }}
                            ></Image>
                        <h5>Not at all happy</h5>
                        <Fade in={this.state.isIndNotAtAllHappySelected} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            src={Sad} 
                            circle
                            onClick = { () => {
                                this.setState({individualHappiness: 'NotSoHappy'});
                                this.setState({isIndNotAtAllHappySelected: false,
                                    isIndNotSoHappySelected: true,
                                    isIndNeutralSelected: false,
                                    isIndHappySelected: false,
                                    isIndVeryHappySelected: false,
                                    isIndDataReadyToSubmit: true
                                });
                                this.setSubmitReadyState();
                            }}
                            ></Image>
                        <h5>Not so happy</h5>
                        <Fade in={this.state.isIndNotSoHappySelected} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            src={Meh}  
                            circle
                            onClick = { () => {
                                this.setState({individualHappiness: 'Neutral'});
                                this.setState({isIndNotAtAllHappySelected: false,
                                    isIndNotSoHappySelected: false,
                                    isIndNeutralSelected: true,
                                    isIndHappySelected: false,
                                    isIndVeryHappySelected: false,
                                    isIndDataReadyToSubmit: true
                                });
                                this.setSubmitReadyState();
                            }}
                            ></Image>
                        <h5>Neutral</h5>
                        <Fade in={this.state.isIndNeutralSelected} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            src={Happy} 
                            circle
                            onClick = { () => {
                                this.setState({individualHappiness: 'Happy'});
                                this.setState({isIndNotAtAllHappySelected: false,
                                    isIndNotSoHappySelected: false,
                                    isIndNeutralSelected: false,
                                    isIndHappySelected: true,
                                    isIndVeryHappySelected: false,
                                    isIndDataReadyToSubmit: true
                                });
                                this.setSubmitReadyState();
                            }}
                            ></Image>
                        <h5>Happy</h5>
                        <Fade in={this.state.isIndHappySelected} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            src={VeryHappy}  
                            circle
                            onClick = { () => {
                                this.setState({individualHappiness: 'VeryHappy'});
                                this.setState({isIndNotAtAllHappySelected: false,
                                    isIndNotSoHappySelected: false,
                                    isIndNeutralSelected: false,
                                    isIndHappySelected: false,
                                    isIndVeryHappySelected: true,
                                    isIndDataReadyToSubmit: true
                                });
                                this.setSubmitReadyState();
                            }}
                            ></Image>
                        <h5>Very happy</h5>
                        <Fade in={this.state.isIndVeryHappySelected} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        </Col>
                    </Row>
                    

                    <Row>
                    <h4>Select a picture below that best represents how happy you think your team is feeling with their work:</h4>
                    </Row>
                    <Row>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            id="VS"
                            width="100px" height="100px"
                            src={VerySad}  
                            circle
                            onClick = { () => {
                                this.setState({teamHappiness: 'NotAtAllHappy'});
                                this.setState({isTeamNotAtAllHappySelected: true,
                                    isTeamNotSoHappySelected: false,
                                    isTeamNeutralSelected: false,
                                    isTeamHappySelected: false,
                                    isTeamVeryHappySelected: false,
                                    isTeamDataReadyToSubmit: true
                                });
                                this.setSubmitReadyState();
                            }}
                            ></Image>
                        <h5>Not At All happy</h5>
                        <Fade in={this.state.isTeamNotAtAllHappySelected} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            src={Sad} 
                            circle
                            onClick = { () => {
                                this.setState({teamHappiness: 'NotSoHappy'});
                                this.setState({isTeamNotAtAllHappySelected: false,
                                    isTeamNotSoHappySelected: true,
                                    isTeamNeutralSelected: false,
                                    isTeamHappySelected: false,
                                    isTeamVeryHappySelected: false,
                                    isTeamDataReadyToSubmit: true
                                });
                                this.setSubmitReadyState();
                            }}
                            ></Image>
                        <h5>Not so happy</h5>
                        <Fade in={this.state.isTeamNotSoHappySelected} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            src={Meh}  
                            circle
                            onClick = { () => {
                                this.setState({teamHappiness: 'Neutral'});
                                this.setState({isTeamNotAtAllHappySelected: false,
                                    isTeamNotSoHappySelected: false,
                                    isTeamNeutralSelected: true,
                                    isTeamHappySelected: false,
                                    isTeamVeryHappySelected: false,
                                    isTeamDataReadyToSubmit: true
                                });
                                this.setSubmitReadyState();
                            }}
                            ></Image>
                        <h5>Neutral</h5>
                        <Fade in={this.state.isTeamNeutralSelected} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            src={Happy} 
                            circle
                            onClick = { () => {
                                this.setState({teamHappiness: 'Happy'});
                                this.setState({isTeamNotAtAllHappySelected: false,
                                    isTeamNotSoHappySelected: false,
                                    isTeamNeutralSelected: false,
                                    isTeamHappySelected: true,
                                    isTeamVeryHappySelected: false,
                                    isTeamDataReadyToSubmit: true
                                });
                                this.setSubmitReadyState();
                            }}
                            ></Image>
                        <h5>Happy</h5>
                        <Fade in={this.state.isTeamHappySelected} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            src={VeryHappy}  
                            circle
                            onClick = { () => {
                                this.setState({teamHappiness: 'VeryHappy'});
                                this.setState({isTeamNotAtAllHappySelected: false,
                                    isTeamNotSoHappySelected: false,
                                    isTeamNeutralSelected: false,
                                    isTeamHappySelected: false,
                                    isTeamVeryHappySelected: true,
                                    isTeamDataReadyToSubmit: true
                                });
                                this.setSubmitReadyState();
                            }}
                            ></Image>
                        <h5>Very happy</h5>
                        <Fade in={this.state.isTeamVeryHappySelected} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        </Col>
                    </Row>
                    <Fade in={this.state.isDataReadyToSubmit && !this.state.isPostponed} tag="h5" className="mt-3">
                    <Row>
                        <Col align = "center" xs={12} sm={10}>
                            <Button
                                bsStyle="primary"
                                onClick={this.submit}
                                block
                            >Submit</Button>

                        </Col>
                    </Row>
                    </Fade>
                    <Row>
                        <Fade in={this.state.isClicked} tag="h5" className="mt-3">
                        'Thanks for your help! Your happiness information has been saved. We will remind you for the next notification.'
                        </Fade>
                    </Row>
                    <Row>
                        <Fade in={this.state.isPostponed} tag="h5" className="mt-3">
                        'Thank you! You will be sent a reminder again shortly.'
                        </Fade>
                    </Row>
                    <Fade in={!this.state.isPostponed && !this.state.isClicked} tag="h5" className="mt-3">
                    <Row>
                    <Col>
                            <Button
                                bsStyle="link"
                                onClick={() => {this.setReminder(10000);}}
                                block
                            >Postpone by 5 minutes</Button>
                            </Col>
                            <Col>                            
                            <Button
                                bsStyle="link"
                                onClick={() => {this.setReminder(20000);}}
                                block
                            >Postpone by 10 minutes</Button>
                            </Col>
                            <Col>
                            <Button
                                bsStyle="link"
                                onClick={() => {this.setReminder(40000);}}
                                block
                            >Postpone by 20 minutes</Button>
                        </Col>
                    </Row>
                    </Fade>
                </Grid>
                </Container>     
            </div>
        );
        
    }

    

    submit = () => {
            this.setState({isClicked : !this.state.isClicked});
            this.setState({isSelected : true} );
            this.setState({isDataReadyToSubmit : false});
            this.props.addEmotions(this.state.team, this.state.individualHappiness,this.state.teamHappiness);
    }



}


RequestText.propTypes = {
    addEmotions: PropTypes.func.isRequired,
    team: PropTypes.object.isRequired,
    emotions: PropTypes.object.isRequired,
    emotion2: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    team: state.team,
    emotions: state.individualHappiness,
    emotion2: state.teamHappiness
});


export default connect(mapStateToProps, { addEmotions })(RequestText);