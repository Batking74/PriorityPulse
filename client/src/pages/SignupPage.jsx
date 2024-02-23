import FormTemplate from "../components/UI/FormTemplate";
import React from "react";

export default function SignUpPage() {
    return (
        <FormTemplate pageData={{
            WelcomeMessage: 'Create Your Account then we will get started!',
            NexOptionRoute: '/Login',
            TextDisplay: {
                ButtonText: 'Create Account',
                LinkText1: 'Already have an Account?',
                LinkText2: 'Login'
            }
        }} />
    )
}