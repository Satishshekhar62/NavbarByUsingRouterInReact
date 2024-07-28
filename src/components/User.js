import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { username } = useParams();
  return <h2>User Page for {username}</h2>;
};

export default User;
