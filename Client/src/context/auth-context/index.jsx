/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { checkAuthService, loginService, registerService } from "@/services";
export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData)
  const [auth, setAuth] = useState({
    authenticate: false,
    user: null,
  });
  async function handleRegisterUser(event) {
    event.preventDefault();
    const data = await registerService(signUpFormData);
  }
  async function handleLoginUser(event) {
    event.preventDefault();
    const data = await loginService(signInFormData);
    if (data.success) {
      sessionStorage.setItem('accessToken', JSON.stringify(data.data.accessToken))
      setAuth({
        authenticate: true,
        user: data.data.user,
      });
    }
    else {
      setAuth({
        authenticate: false,
        user: null,
      });
    }
  }
  // check auth user
  async function checkAuthUser() {
    const data = await checkAuthService();
    if (data.succes) {
      setAuth({
        authenticate: true,
        user: data.data.user,
      });
    }
    else {
      setAuth({
        authenticate: false,
        user: null,
      });
    }
  }

  useEffect(() => {
    checkAuthUser();
  }, []);

  return (
    <AuthContext.Provider
      value=
      {{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
        handleLoginUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Add prop types validation for 'children'
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};