import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import axiosInstance from '../api/axiosInstance';

function FormaInit({ init, user }) {
  const [votes, setVotes] = useState([]);

  const voteHandler = () => {};

  useEffect(() => {
    axiosInstance(`/inits/votes/${init.id}`).then(({ data }) => {
      setVotes(data.allPeople.map((person) => person.UserInits));
    });
  }, []);

  console.log(votes);

  return (
    <Card style={{ width: '70rem' }}>
      <Card.Img variant="top" src={init.url} />
      <Card.Body>
        <Card.Title>{init.name}</Card.Title>
        <Card.Text>{init.motivation}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{init.level}</ListGroup.Item>
        <ListGroup.Item>
          Дата окончания голосования: {init.dateEnd}
        </ListGroup.Item>
      </ListGroup>
      {user?.data &&
        !votes?.find(({ userId }) => userId === user?.data?.id) && (
          <Card.Body
            style={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <Button style={{ width: 200, backgroundColor: 'green', border: 0 }}>
              За
            </Button>
            <Button style={{ width: 200, backgroundColor: 'red', border: 0 }}>
              Против
            </Button>
          </Card.Body>
        )}

      <Card.Body>
        <ProgressBar>
          <ProgressBar
            variant="success"
            now={
              (votes.filter((vote) => vote.vote).length / votes.length) * 100
            }
            label={`${
              (votes.filter((vote) => vote.vote).length / votes.length) * 100
            }%`}
          />
          <ProgressBar
            variant="danger"
            now={
              (votes.filter((vote) => vote.vote == false).length /
                votes.length) *
              100
            }
            label={`${
              (votes.filter((vote) => vote.vote == false).length /
                votes.length) *
              100
            }%`}
          />
        </ProgressBar>
      </Card.Body>
    </Card>
  );
}

export default FormaInit;
