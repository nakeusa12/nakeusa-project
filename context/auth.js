import { Authentication } from "config/firebase";
import { useEffect, useState } from "react";
import { initialUserState, useUser } from "./user";

const AuthStateChangeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false); //before true
  const user = useUser();
  const { SetUser } = user;

  const InitiateAuthStateChange = () => {
    Authentication().onAuthStateChanged((user) => {
      if (user) {
        SetUser({ email: user.email, uid: user.uid })
      } else {
        SetUser(initialUserState)
      }
      setIsLoading(false)
    });
  };

  useEffect(() => {
    InitiateAuthStateChange();
  }, []);

  if(isLoading){
    return <h1>Loading...</h1>
  }

  return children;
};

export default AuthStateChangeProvider;
