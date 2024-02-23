import React from "react";

export default function FormTemplate({ pageData }) {
    const { WelcomeMessage, TextDisplay, NexOptionRoute } = pageData;
    return (
        <div className="Form-Main-Container">
            <div className="Welcome-Container">
                <h1>Welcome!</h1>
                <p>{WelcomeMessage}</p>
                <p>P</p>
            </div>
            <div className="Input-Container">
                <input placeholder="Username" type="text" />
                <input placeholder="Password" type="password" />
                <button>{TextDisplay.ButtonText}</button>
            </div>
            <p className="NextOption-Link">{TextDisplay.LinkText1} <a href={NexOptionRoute}>{TextDisplay.LinkText2}</a></p>
        </div>
    )
}