import React from "react";

export default function DeletePriority() {
    const deletePriority = () => {
        const valid = confirm('Are you sure you would like to delete this Priority? This Action cannot be undone.')
        if(!valid) return;
        console.log('deleted')
    }
    return (
        <div className='Delete-Container'>
            <h3>Delete</h3>
            <div>
                <button onClick={deletePriority}>&#128465;</button>
            </div>
            <div>
                <button>&#128465;</button>
            </div>
            <div>
                <button>&#128465;</button>
            </div>
        </div>
    )
}