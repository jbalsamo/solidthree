import { Col, Container, Row } from "solid-bootstrap";
import type { Component } from "solid-js";
import style from "../css/Canvas.module.css";

const Canvas: Component = () => {
  return (
    <Container>
      <div class={style.mycanvas}>Canvas</div>
    </Container>
  );
};

export default Canvas;
