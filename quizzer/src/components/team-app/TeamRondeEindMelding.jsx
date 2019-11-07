import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import HeaderTitel from "../HeaderTitel";

export class TeamRondeEindMelding extends React.Component {
    render() {
        return (
            <Container>
                <Row className="min-vh-100">
                    <HeaderTitel/>
                    <Alert className={"h-25 d-inline-block w-100"} variant="light">
                        <Alert.Heading className={"text-center"}><span role="img" aria-label="question">❓</span> Ronde
                            is afgelopen <span role="img" aria-label="question">❓</span></Alert.Heading>
                        <p className={"text-center"}>
                            De Quiz Master bepaalt of er nog een ronde wordt gespeeld.
                        </p>
                    </Alert>
                </Row>
            </Container>
        )
    }
}

export default TeamRondeEindMelding
