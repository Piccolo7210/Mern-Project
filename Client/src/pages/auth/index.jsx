/* eslint-disable no-unused-vars */
// import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Tabs,TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { useContext, useState } from "react"
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import CommonForm from "../../components/common-form";
import { signUpFormControls, signInFormControls } from "../../config";
import { AuthContext } from "../../context/auth-context";


function AuthPage() {
    const [activeTab, setActiveTab] = useState('signin')
   const { signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
    handleLoginUser,
} = useContext(AuthContext);
   
    function handleTabChange(value) {
        setActiveTab(value)
    }
 function checkIfSignInFormIsValid()
 {
    return signInFormData && signInFormData.userEmail !== '' && signInFormData.password !==''
// Password, email checking logic
}

function checkIfSignUpFormIsValid(){
    return signUpFormData && signUpFormData.userEmail !== '' && signUpFormData.password !=='' && signUpFormData.userName!==''
    // Password, email checking logic   
}

    console.log(signInFormData);
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center broder-b">
                <Link to={'/'} className="flex items-center justify-center" >
                    <GraduationCap className="h-8 w-8 mr-4" />
                    <span className="font-extrabold text-xl">MERN Learn</span>
                </Link>
            </header>
            <div className="flex items-center justify-center min-h-screen bg-background">
                <Tabs
                    value={activeTab}
                    defaultValue="signin"
                    onValueChange={handleTabChange}
                    className="w-full max-w-md"
                >
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="signin">
                            Sign In
                        </TabsTrigger>
                        <TabsTrigger value="signup">
                            Sign UP
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="signin">
                        <Card className="p-6 space-y-4">
                            <CardHeader>
                                <CardTitle>
                                Sign in to your account
                                </CardTitle>
                                <CardDescription>
                                    Enter your mail address and password to access your account
                                </CardDescription>
                            </CardHeader>
                           <CardContent>
                           <CommonForm formControls={signInFormControls}
                            buttonText={"Sign In"}
                            formData={signInFormData}
                            setFormData={setSignInFormData}
                            isButtonDisabled={(!checkIfSignInFormIsValid())}
                            handleSubmit={handleLoginUser}
                            />
                           </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="signup">
                    <Card className="p-6 space-y-4">
                            <CardHeader>
                                <CardTitle>
                                Create a new  account
                                </CardTitle>
                                <CardDescription>
                                    Enter your credentials to get started
                                </CardDescription>
                            </CardHeader>
                           <CardContent>
                           <CommonForm formControls={signUpFormControls}
                            buttonText={"Sign Up"}
                            formData={signUpFormData}
                            setFormData={setSignUpFormData}
                            isButtonDisabled={(!checkIfSignUpFormIsValid())}
                            handleSubmit={handleRegisterUser}
                            />
                           </CardContent>
                        </Card>
                        
                    </TabsContent>

                </Tabs>
            </div>

        </div>
    );
}
export default AuthPage;