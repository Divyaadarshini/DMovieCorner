import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "@aws-amplify/auth";

function Logout() {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    const handleLogout = async () => {
      setIsLoggingOut(true);

      try {
        await signOut();

        const redirectUrl = new URL(
          'https://dmc-dev.auth.eu-north-1.amazoncognito.com/login?response_type=code&client_id=uhoi5rbt1n0fhqcjfue4qd8at&redirect_uri=http://localhost:3000/movies/'
        );
        redirectUrl.searchParams.append('response_type', 'code');
        redirectUrl.searchParams.append('client_id', 'uhoi5rbt1n0fhqcjfue4qd8at');
        redirectUrl.searchParams.append('redirect_uri', 'https://dmc-dev.auth.eu-north-1.amazoncognito.com/login?response_type=code&client_id=uhoi5rbt1n0fhqcjfue4qd8at&redirect_uri=http://localhost:3000/movies/');

        window.location.href = redirectUrl.toString();
      } catch (error) {
        console.error('Error signing out:', error);
      } finally {
        setIsLoggingOut(false);
      }
    };

    handleLogout();
  }, [navigate]);

  return isLoggingOut ? <h2>Logging out...</h2> : <h2>Logged out successfully!</h2>;
}

export default Logout;