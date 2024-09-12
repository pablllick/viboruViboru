import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function FormaUser({ user,clickHandler }) {

 
  console.log({ user });

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.url} />
      <Card.Body>
        <ListGroup.Item>{user.surname}</ListGroup.Item>
        <ListGroup.Item>{user.lastName}</ListGroup.Item>
        <ListGroup.Item>{user.name}</ListGroup.Item>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{user.email}</ListGroup.Item>
        {/* Удаляем отображение hashpass */}
      </ListGroup>
      <Card.Body>
        <ListGroup.Item>{user.fedDistrict}</ListGroup.Item>
        <ListGroup.Item>{user.region}</ListGroup.Item>
        <ListGroup.Item>{user.municipality}</ListGroup.Item>
      </Card.Body>
      <Card.Body>
        <Button onClick={clickHandler}>редактировать</Button>
      </Card.Body>
    </Card>
  );
}

export default FormaUser;
