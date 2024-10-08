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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        backgroundColor: '#f8f9fa',
      }}
    >
      <Card
        style={{
          width: '100%',
          height: 700,
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

        <Card.Body
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Card.Title style={{ textAlign: 'center', marginBottom: '1rem' }}>
            {user.name} {user.lastName} {user.surname}
          </Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <strong>Почта:</strong> {user.email}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <strong>Федеральный округ:</strong> {user.fedDistrict}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <strong>Регион:</strong> {user.region}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <strong>Муниципалитет:</strong> {user.municipality}
            </ListGroup.Item>
          </ListGroup>
          <Card.Footer style={{ textAlign: 'center' }}>
            <Button variant="primary" onClick={clickHandler}>
              Редактировать
            </Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FormaUser;
