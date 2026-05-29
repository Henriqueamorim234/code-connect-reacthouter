import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Spinner } from "../Spinner";
import { useNavigate } from "react-router";

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const { isAuthenticated, isLoading } = useAuth();
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/auth/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return children;
};
