import React, { useEffect, useState } from 'react';
import FormaInits from '../ui/FormaInit';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

export default function OneInitPage() {
  const { id } = useParams();
  const [init, setInit] = useState(null);
  useEffect(() => {
    axiosInstance(`/inits/${id}`).then(({ data }) => {
      setInit(data);
    });
  }, []);

  return <>{init && <FormaInits key={init.id} init={init} />}</>;
}
