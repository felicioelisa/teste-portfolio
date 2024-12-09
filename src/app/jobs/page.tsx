import Image from "next/image";
import work from "../../../public/work.jpg"
import "./index.css";
import { Col, Container, Row } from "react-bootstrap";

export default function Jobs() {
    return (
        <main>
            <Container fluid="md">
                <Row xs={1} md={4}>
                    <Col>
                        <Image src={work} width={0} height={0} alt="logo" />
                    </Col>
                    <Col>Solucap</Col>
                    <Col>Qualitor</Col>
                    <Col>SENAI - ISI SIM</Col>
                    <Col>Banrisul</Col>
                </Row>
            </Container>           
		</main>
    );
}