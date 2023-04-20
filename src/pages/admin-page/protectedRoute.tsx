import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const withProtectedRoute = (WrappedComponent) => {
  const ProtectedRoute = (props) => {
    const { isAuthenticated, isLoading } = useAuth0();

    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        window.location.href = "/";
      }
    }, []);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    }

    return <Navigate to="/" />;
  };

  return ProtectedRoute;
};

export default withProtectedRoute;
