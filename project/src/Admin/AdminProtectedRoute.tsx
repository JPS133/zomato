import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

export default function AdminProtectedRoute({ children }: Props) {
  const isAdmin = localStorage.getItem("isAdmin");

  if (!isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}