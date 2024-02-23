import React from "react";

export function CategorySelectComponent() {
    return (
        <div className="Select-Category-Container">
            <h2>Select Category</h2>
            <div>
                <button>Health</button>
                <button>Tech</button>
            </div>
        </div>
    )
}

export function CategoryDisplayComponent() {
    return (
        <div className='Priority-Category-Container'>
            <h3>Category</h3>
            <div>
                <p>Health</p>
            </div>
            <div>
                <p>Health</p>
            </div>
            <div>
                <p>Health</p>
            </div>
        </div>
    )
}