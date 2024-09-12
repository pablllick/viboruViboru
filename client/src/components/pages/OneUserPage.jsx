/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import FormaUser from '../ui/FormaUser';

export default function OneUserPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance(`/users/${id}`)
      .then(({ data }) => {
        setUser(data);
      })
      .catch((error) => {
        setError(error.response?.data?.message || 'Ошибка сервера');
      });
  }, [id]);

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (!user) {
    return <div>Загрузка...</div>;
  }

  return <FormaUser key={user.id} user={user} />;
}