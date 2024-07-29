import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <button onClick={handleLogout} className="btn btn-secondary">Logout</button>;
};

export default LogoutButton;