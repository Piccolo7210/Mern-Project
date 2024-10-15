

export const signUpFormControls = [
    {
        name: 'userName',
        label: 'User Name',
        placeholder: 'Enter your user name',
        type: 'text',
        componentType: 'input'
    },
    {
        name: 'userEmail',
        label: 'User Email',
        placeholder: 'Enter your mail address',
        type: 'email',
        componentType: 'input'
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        type: 'text',
        componentType: 'input'
    }
    
]

export const signInFormControls = [
    {
        name: 'userEmail',
        label: 'User email',
        placeholder: 'Enter your mail address',
        type: 'email',
        componentType: 'input'
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        type: 'text',
        componentType: 'input'
    }
    
]
export const initialSignUpFormData ={
    userEmail: "",
    userName: "",
    password: "",

}
export const initialSignInFormData ={
    userEmail: "",
    password: "",

}