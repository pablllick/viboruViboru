import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function FormaUser({ user, clickHandler }) {
  console.log({ user });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
      }}
    >
      <Card
        style={{
          width: '100%',
          maxWidth: '600px',
          margin: 'auto',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* <Card.Img
          variant="top"
          src={user.url}
          alt={`${user.name} ${user.lastName}`}
        /> */}
        <Card.Body>
          <Card.Title style={{ textAlign: 'center', marginBottom: '1rem' }}>
            {user.name} {user.lastName} {user.surname}
          </Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <strong>Email:</strong> {user.email}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <strong>Federal District:</strong> {user.fedDistrict}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <strong>Region:</strong> {user.region}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <strong>Municipality:</strong> {user.municipality}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer style={{ textAlign: 'center' }}>
          <Button variant="primary" onClick={clickHandler}>
            Редактировать
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default FormaUser;
