import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, Row } from 'react-bootstrap';
import InitCardUi from '../ui/InitCardUi';

export default function MainPage() {
  const [inits, setInits] = useState([]);
  useEffect(() => {
    axios('/api/inits').then(({ data }) => {
      setInits(data);
    });
  }, []);

  return (
    <Container>
      {inits?.map((init) => (
        <InitCardUi key={init.id} init={init} />
      ))}
    </Container>
  );
}
