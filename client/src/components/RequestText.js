import React, { Component } from 'react';
import { Container , Row, Col, Fade} from 'reactstrap';
import { Grid, Image, Button} from 'react-bootstrap';

// Import images to represent individual happiness levels
import IndNotAtAllHappy from '../images/IndNotAtAllHappy.jpg';
import IndNotSoHappy from '../images/IndNotSoHappy.jpg';
import IndNeutral from '../images/IndNeutral.jpg';
import IndHappy from '../images/IndHappy.jpg';
import IndVeryHappy from '../images/IndVeryHappy.jpg';

// Import images to represent team happiness levels
import TeamNotAtAllHappy from '../images/TeamNotAtAllHappy.jpg';
import TeamNotSoHappy from '../images/TeamNotSoHappy.jpg';
import TeamNeutral from '../images/TeamNeutral.jpg';
import TeamHappy from '../images/TeamHappy.jpg';
import TeamVeryHappy from '../images/TeamVeryHappy.jpg';

import GreenCheck from '../images/GreenCheck.jpg';
import { connect } from 'react-redux';
import { addEmotions } from '../actions/emotionActions';
import PropTypes from 'prop-types';
import Notifier from "react-desktop-notification";

class RequestText extends Component {

    state = {
        //Status variables to control button and link enable/disable values
        isPostponed: false,
        isNotSubmitted: true,
        isFinalSubmissionDone: false,

        // Validating for the completion of both selections for emotion
        isIndDataReadyToSubmit: false,
        isTeamDataReadyToSubmit: false,
        isDataReadyToSubmit: false,

        //Individual Emotion Selections
        isIndNotAtAllHappySelected: false,
        isIndNotSoHappySelected: false,
        isIndNeutralSelected: false,
        isIndHappySelected: false,
        isIndVeryHappySelected: false,

        //Team Emotion Selections
        isTeamNotAtAllHappySelected: false,
        isTeamNotSoHappySelected: false,
        isTeamNeutralSelected: false,
        isTeamHappySelected: false,
        isTeamVeryHappySelected: false
    }


    // Setting the ready status for submitting data 
    // only when the user has selected both options for the emotions
    setSubmitReadyState = () => {
        if (this.state.isIndDataReadyToSubmit && this.state.isTeamDataReadyToSubmit){
        this.setState({
            isDataReadyToSubmit : true
        });
    }
    }

    //Setting the postpone time for the next notification
    setReminder = (timeLimit) => {
        setTimeout(this.gotNewNotification, timeLimit);
        this.setState({
            isPostponed : true
        });
    }

    // Generating desktop notifications
    gotNewNotification() {
        Notifier.start(
            "Howz It Going",
            "It's now time to enter your Happiness Information. Please click here.",
            "https://gentle-chamber-61056.herokuapp.com/"
          ); 
    }

    // Default values [for sprint] specified when the component mounts
    componentDidMount(){
        this.setState({
            team: 'team10',
            individualHappiness : 'undefined',
            teamHappiness: 'undefined',
        })
        this.render();

        // [For Future Sprint] - Setting up default notification to simulate admin specified time delays - 45 min
        setTimeout(this.gotNewNotification, 27000000);
    }

    // Rendering the Individual Emotion Selection Section, 
    // The Team Emotion Selection Section and the Actions & Notifications Area
    // of the component
    render() {
        return(
            <div>
                <Container>
                <Grid> 


                    {/* Individual Happiness Levels */}
                    <Row>
                    <h4>Select a picture below that best represents how happy you are feeling with your work:</h4>
                    </Row>
                    <Row>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            id="IndNotAtAllHappy"
                            width="100px" height="100px"
                            src={IndNotAtAllHappy}  
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
                        <Fade in={this.state.isIndNotAtAllHappySelected && !this.state.isPostponed && !this.state.isFinalSubmissionDone} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            id = "IndNotSoHappy"
                            width="100px" height="100px"
                            src={IndNotSoHappy} 
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
                        <Fade in={this.state.isIndNotSoHappySelected && !this.state.isPostponed && !this.state.isFinalSubmissionDone} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            id = "IndNeutral"
                            src={IndNeutral}  
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
                        <Fade in={this.state.isIndNeutralSelected && !this.state.isPostponed && !this.state.isFinalSubmissionDone} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            id = "IndHappy"
                            src={IndHappy} 
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
                        <Fade in={this.state.isIndHappySelected && !this.state.isPostponed && !this.state.isFinalSubmissionDone} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            id = "IndVeryHappy"
                            src={IndVeryHappy}  
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
                        <Fade in={this.state.isIndVeryHappySelected && !this.state.isPostponed && !this.state.isFinalSubmissionDone} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        </Col>
                    </Row>
                    


                    {/* Team Happiness Levels */}
                    <Row>
                    <h4>Select a picture below that best represents how happy you think your team is feeling with their work:</h4>
                    </Row>

                    <Row>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            id="TeamNotAtAllHappy"
                            width="100px" height="100px"
                            src={TeamNotAtAllHappy}  
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
                        <h5>Not at all happy</h5>
                        <Fade in={this.state.isTeamNotAtAllHappySelected && !this.state.isPostponed && !this.state.isFinalSubmissionDone} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            id="TeamNotSoHappy"
                            width="100px" height="100px"
                            src={TeamNotSoHappy} 
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
                        <Fade in={this.state.isTeamNotSoHappySelected && !this.state.isPostponed && !this.state.isFinalSubmissionDone} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            id="TeamNeutral"
                            src= {TeamNeutral}  
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
                        <Fade in={this.state.isTeamNeutralSelected && !this.state.isPostponed && !this.state.isFinalSubmissionDone} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            id="TeamHappy"
                            src={TeamHappy} 
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
                        <Fade in={this.state.isTeamHappySelected && !this.state.isPostponed && !this.state.isFinalSubmissionDone} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        </Col>
                        <Col align="center" xs={12} sm={2}>
                        <Image 
                            width="100px" height="100px"
                            id = "TeamVeryHappy"
                            src={TeamVeryHappy}  
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
                        <Fade in={this.state.isTeamVeryHappySelected && !this.state.isPostponed && !this.state.isFinalSubmissionDone} tag="h5" className="mt-3">
                            <Image width="50px" height="50px"
                            src={GreenCheck}></Image>
                        </Fade>
                        </Col>
                    </Row>
                  

                    
                    {/* The Submit button is displayed only once the team member has selected
                    both individual and team happiness levels */}
                    <Fade in={(this.state.isIndDataReadyToSubmit && this.state.isTeamDataReadyToSubmit) && this.state.isNotSubmitted && !this.state.isPostponed} tag="h5" className="mt-3">
                    <Row>
                        <Col align = "center" xs={12} sm={10}>
                            <Button
                                id = "Submit"
                                bsStyle="primary"
                                onClick={this.submit}
                                block
                                >Submit</Button>
                        </Col>
                    </Row>
                    </Fade>
                   

                    {/* Confirmation message for the member once the data is submitted */}
                    <Row>
                        <Fade in={!this.state.isNotSubmitted} tag="h5" className="mt-3" id="submitted">
                        Thanks for your help! Your happiness information has been saved. We will remind you for the next notification.
                        </Fade>
                    </Row>



                    {/* Confirmation message for the member once the user postpones the notification */}
                    <Row align="center">
                        <Fade in={this.state.isPostponed} tag="h5" className="mt-3" id="postponed">
                        Thank you! You will be sent a reminder again shortly.
                        </Fade>
                    </Row>



                    {/* Displaying the postone options through the application */}
                    <Fade in={!this.state.isPostponed && this.state.isNotSubmitted} tag="h5" className="mt-3">
                    <Row>
                    <Col>
                            <Button
                                id="5min"
                                bsStyle="link"
                                onClick={() => {this.setReminder(300000);}}
                                block
                            >Postpone by 5 minutes</Button>
                            </Col>
                            <Col>                            
                            <Button
                                bsStyle="link"
                                id="10min"
                                onClick={() => {this.setReminder(600000);}}
                                block
                            >Postpone by 10 minutes</Button>
                            </Col>
                            <Col>
                            <Button
                                bsStyle="link"
                                id="20min"
                                onClick={() => {this.setReminder(12000000);}}
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
 
    // Invoking the actions to save the user information in the db
    // once the submit button is clicked 
    submit = () => {
            this.setState({isFinalSubmissionDone : true} );
            this.setState({isSelected : true} );
            this.setState({isDataReadyToSubmit : false});
            this.setState({isNotSubmitted:false})
            this.props.addEmotions(this.state.team, this.state.individualHappiness,this.state.teamHappiness);
    }
}


// Specifying the information passed on to the db by the end user 
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