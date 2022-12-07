import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivatedRoute({
  isAllowed,
  redirectPath,
  children,
}) {
  console.log(isAllowed);
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
}
