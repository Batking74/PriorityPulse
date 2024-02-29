import React, { useState, useEffect } from "react";

export default function FormTemplate({ pageData }) {
    const { WelcomeMessage, TextDisplay, NexOptionRoute } = pageData;
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    // Validating Users data
    const validateInput = () => {
        if(username != '' && password != '') {
            if(NexOptionRoute != '/Login') {
                // sendToBackend('/Api/Signup', 'Error Occured trying to Signup!');
            }
            else {
                // sendToBackend('/Api/Login', 'Error Occured trying to Login!');
            }
        }
        else alert('All Feilds Must Be Filled Out!');
    }
    
    // Sends Data to backend to do work
    const sendToBackend = async (api, errorMsg) => {
    console.log(login)

        // try {
        //     const res = await fetch(api);
        //     if(res.ok) {
        //         console.log(username)
        //         console.log(password)
                
        //         Redirect the User to their new created Account
        //         Redirect the User to the users Account
        //     }
        //     else {
        //         alert(res);
        //     }
        // }
        // catch(error) {
        //     console.error(`${errorMsg} Error: ${error}`);
        //     throw error;
        // }
    }

    // Keeping Track of State Changes in inputs
    const updateState = ({ target }) => {
        if(target.type === 'text') setUsername(target.value);
        else setPassword(target.value);
    }


    // Rendering JSX to the Webpage
    return (
        <div className="Form-Main-Container">
            <div className="Welcome-Container">
                <h1>Welcome!</h1>
                <p>{WelcomeMessage}</p>
                <p>P</p>
            </div>
            <div className="Input-Container">
                <input onInput={updateState} placeholder="Username" type="text" />
                <input onInput={updateState} placeholder="Password" type="password" />
                <button onClick={validateInput} type="submit">{TextDisplay.ButtonText}</button>
            </div>
            <p className="NextOption-Link">{TextDisplay.LinkText1} <a href={NexOptionRoute}>{TextDisplay.LinkText2}</a></p>
        </div>
    )
}