import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ child, requireAdmin }) {
  const { user } = useAuthContext();

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace={true} />;
  }

  return child;
}
