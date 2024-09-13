import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRouter({
  children,
  isAllowed,
  redirectPath = '/',
}) {
  if (!isAllowed) return <Navigate to={redirectPath} replace />;
  return children || <Outlet />;
}