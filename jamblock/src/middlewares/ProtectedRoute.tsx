// ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Popup from "../components/Popup";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    Popup({ message: "Please sign in to access this page." });
    // return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute;