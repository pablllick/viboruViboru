import React from 'react';
import FormaUpdateUser from '../ui/FormaUpdateUser';

export default function UpdateUserPage({setUser, user}) {
  return <FormaUpdateUser setUser={setUser} user={user}/>;
}
