import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const HomePageContent = () => {
  return (
    <>
      <h1>Hola Mundo</h1>
      <Button variant="primary">Primary</Button>{" "}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>Ejercicio First</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default HomePageContent;
