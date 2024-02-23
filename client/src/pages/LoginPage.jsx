import FormTemplate from "../components/UI/FormTemplate";
import React from "react";

export default function LoginPage() {
    return (
        <FormTemplate pageData={{
            WelcomeMessage: 'Prioritize Tasks and keep track with your goals!',
            NexOptionRoute: '/SignUp',
            TextDisplay: {
                ButtonText: 'Login',
                LinkText1: 'Dont have an Account?',
                LinkText2: 'Sign Up'
            }
        }} />
    )
}