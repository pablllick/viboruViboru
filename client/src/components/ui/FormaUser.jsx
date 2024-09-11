import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function FormaUser({ user }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.url} />
      <Card.Body>
        <ListGroup.Item>{user.surName}</ListGroup.Item>
        <ListGroup.Item>{user.secondName}</ListGroup.Item>
        <ListGroup.Item>{user.name}</ListGroup.Item>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{user.email}</ListGroup.Item>
        <ListGroup.Item>{Init.password}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <ListGroup.Item> {user.FedDistrict}</ListGroup.Item>
        <ListGroup.Item> {user.Region}</ListGroup.Item>
        <ListGroup.Item> {user.Municipality}</ListGroup.Item>
      </Card.Body>
      <Card.Body>
        <Button>?</Button>
      </Card.Body>
    </Card>
  );
}

export default FormaUser;
