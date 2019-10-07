import React, { useState } from 'react';
import InputBox from '../src/InputBox.jsx'
import { Container, Row, Col } from 'react-bootstrap'

const Inputcompo = () => {
    const [data, setData] = useState({})
    let change = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    let animate = () => {
        // document.getElementById("ani").style.display = "inline-block"
        document.getElementById("ani").style.transform = "translateX(1px)"
        document.getElementById("show").style.display = "none"
        document.getElementById("off").style.display = "inline-block"
    }
    var animateOff = () => {
        // document.getElementById("ani").style.display = "none"
        // document.getElementById("show").addEventListener("click")
        document.getElementById("ani").style.transform = "translateX(-60px)"
        document.getElementById("off").style.display = "none"
        document.getElementById("show").style.display = "inline-block"
    }
    return (
        <div>
            <InputBox label="name" change={change} />
            <InputBox label="pass" change={change} />
            <InputBox label="lastName" change={change} />
            {data.name}
            {data.pass}
            {data.lastName}

            <Container fluid>
                <Row>
                    <Col id="ani" style={{ backgroundColor: "white", minHeight: "100px", position: "absolute", width: "100px", zIndex: "6", transform: "translateX(-60px)", transition: "all 0.3s linear", margin: "0px", padding: "0px" }}>
                        <button style={{ padding: "0px", float: "right" }} id="show" onClick={animate}>show</button>
                        <button id="off" style={{ display: "none", padding: "0px", float: "right" }} onClick={animateOff}>off</button>
                    </Col>
                    <Col md="6" style={{ backgroundColor: "green", minHeight: "100px" }}>
                        s
                    </Col>
                    <Col md="6" style={{ backgroundColor: "blue", minHeight: "100px" }}>
                        skk
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Inputcompo;