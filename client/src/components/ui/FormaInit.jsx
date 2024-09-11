import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ProgressBar from "react-bootstrap/ProgressBar";

function FormaInit({ init }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={init.url} />
      <Card.Body>
        <Card.Title>{init.name}</Card.Title>
        <Card.Text>{init.motivation}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{init.level}</ListGroup.Item>
        <ListGroup.Item>{init.dateEnd}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button>За</Button>
        <Button>Против</Button>
      </Card.Body>
      <Card.Body>
        <ProgressBar now={init.progress} label={`${init.progress}%`} />
      </Card.Body>
    </Card>
  );
}

export default FormaInit;
