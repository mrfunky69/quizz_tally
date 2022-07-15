import React from "react";
import * as ReactRedux from "react-redux";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Card} from "react-bootstrap";
import HeaderTitel from "../HeaderTitel";

class ScorebordOverzichtScoreUI extends React.Component {
    getTeams() {
        return (
            this.props.currentTeamsScoreboard.map(teamName => {
                let vraag = (teamName.round_score === 1) ? 'task' : 'task';
                return (
                    <Col md={{span: 6}} key={teamName._id}>
                        <Card>
                            <Card.Body>
                                <Card.Title><strong>{teamName._id}</strong></Card.Title>
                                <Card.Text>Team score: <strong>{teamName.team_score}</strong></Card.Text>
                                <Card.Text>this round <strong>{teamName.round_score}</strong> {vraag} of the 12
                                    good</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })
        )
    }

    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel/>
                    <Col md={{span: 6, offset: 3}}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Round: {this.props.roundNumber ? this.props.roundNumber : 1}</Card.Title>
                                <Card.Title>: {this.props.questionNumber ? this.props.questionNumber : 1}/12</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    {this.getTeams()}
                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        roundNumber: state.createGame.roundNumber,
        questionNumber: state.createGame.questionNumber,
        gameRoomTeams: state.createGame.gameRoomTeams,
        currentTeamsScoreboard: state.createScoreboard.currentTeamsScoreboard,

    }
}

export const ScorebordOverzichtScore = ReactRedux.connect(mapStateToProps)(ScorebordOverzichtScoreUI);
