import React, { useEffect, useState } from 'react';
import FormaInits from '../ui/FormaInit';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

export default function OneInitPage({user}) {
  const { id } = useParams();
  const [init, setInit] = useState(null);

  useEffect(() => {
    axiosInstance(`/inits/${id}`).then(({ data }) => {
      setInit(data);
    });
  }, []);

  return <div style={{display: 'flex', justifyContent: 'center' }}>{init && <FormaInits user={user} key={init.id} init={init} />}</div>;
}
