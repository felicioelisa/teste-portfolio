import Image from "next/image";
import work from "../../../public/work.jpg"
import "./index.css";
import { Col, Container, Row, Stack } from "react-bootstrap";

export default function Jobs() {
    return (
        <main>
            <Container className="container">
                <Row className="one">
                    <Col>
                        <Image src={work} width={0} height={0} alt="logo" />
                    </Col>
                </Row>
                <Row className="two">
                    <Col><p>Solucap</p></Col>
                    <Col><p>Qualitor</p></Col>
                    <Col><p>SENAI ISI - SIM</p></Col>
                    <Col><p>Banrisul</p></Col>
                </Row>
            </Container>   
		</main>
    );
}