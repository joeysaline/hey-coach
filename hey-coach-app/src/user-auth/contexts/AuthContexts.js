import React, { useContext, useState, useEffect } from "react";
import { auth } from "../Firebase";
import axios from "axios";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  async function getName(email) {
    try {
      await axios
        .request({
          method: "GET",
          url: `http://${process.env.REACT_APP_SERVER_ADDRESS}:${process.env.REACT_APP_SERVER_PORT}/users/getName/${email}`,
          data: {
            email: currentUser.email,
          },
        })
        .then((response) => {
          console.log(response);
          console.log(response.json());
          return "Mikey";
        });
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    getName,
    signup,
    login,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
