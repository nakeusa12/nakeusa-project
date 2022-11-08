import { Authentication } from "config/firebase";
import { useEffect, useState } from "react";
import { initialUserState, useUser } from "./user";

const AuthStateChangeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useUser();
  const { SetUser } = user;

  const InitiateAuthStateChange = () => {
    Authentication().onAuthStateChanged((user) => {
      if (user) {
        console.log("User Login");
        console.log(user);
        SetUser({ email: user.email, uid: user.uid })
      } else {
        console.log("User Tidak Login");
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
