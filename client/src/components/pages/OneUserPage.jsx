/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import FormaUser from '../ui/FormaUser';
import FormaUpdateUser from '../ui/FormaUpdateUser';

export default function OneUserPage({ setUser, user }) {
  const [show, setShow] = useState(true);

  function clickHandler() {
    setShow(!show);
  }

  if (!user) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      {show ? (
        <FormaUser key={user.id} user={user.data} clickHandler={clickHandler} />
      ) : (
        <FormaUpdateUser setUser={setUser} user={user} />
      )}
    </div>
  );
}
