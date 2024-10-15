/* eslint-disable no-unused-vars */
import { createContext,useState } from "react";
import PropTypes from 'prop-types';
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { registerService } from "@/services";
export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData,setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData,setSignUpFormData] = useState(initialSignUpFormData)
  
    async function handleRegisterUser(event) {
      event.preventDefault();
      const data = await registerService(signUpFormData);
      console.log(data);
    }
  
  return (
    <AuthContext.Provider 
    value=
    {{
      signInFormData,
      setSignInFormData,
      signUpFormData,
      setSignUpFormData,
      handleRegisterUser,
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