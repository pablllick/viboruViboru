import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, Row } from 'react-bootstrap';
import InitCardUi from '../ui/InitCardUi';

export default function MainPage({ inits, filter, search }) {
  console.log(inits);

  return (
    <Container>
      {inits
        ?.filter((init) => {
          return (
            (filter ? init.level === filter : true) &&
            (search
              ? init.name.toLowerCase().includes(search.toLowerCase())
              : true)
          );
        })
        ?.map((init) => (
          <InitCardUi key={init.id} init={init} />
        ))}
    </Container>
  );
}
