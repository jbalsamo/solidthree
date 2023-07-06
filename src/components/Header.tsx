import { Col, Container, Row } from "solid-bootstrap";
import type { Component } from "solid-js";
import styles from "../css/Header.module.css";
import logo from "../three-100x100.png";

const Header: Component = () => {
  return (
    <div class={styles.header}>
      <Container>
        <Row>
          <Col md="auto">
            <img src={logo} />
          </Col>
          <Col md={{ span: 3, offset: 0 }}>
            <h1>Three.js Example</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
