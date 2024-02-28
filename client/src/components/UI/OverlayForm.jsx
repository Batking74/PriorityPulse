import React, { useState } from "react";

export default function OverlayForm({ setShowPriorityForm }) {
    const [todos, setTodos] = useState([]);
    const closePriorityForm = () => setShowPriorityForm(false);
    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            setNewTodo('');
        }
    };

    const [newTodo, setNewTodo] = useState('');
    return (
        <div className="Priority-Form-Overlay">
            <div className="Priority-Form-Container">
                <button onClick={closePriorityForm}>Close</button>
                <div>
                    <input
                        placeholder='Enter your priority'
                        maxLength={50}
                        type="text"
                        onChange={(e) => setNewTodo(e.target.value)} />
                    <input
                        placeholder='Enter your Todo'
                        maxLength={20}
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)} />

                    <button onClick={handleAddTodo}>Add Todo</button>
                    <select name="" id="">
                        {todos.map((todo, index) => {
                            // if (!todo === 'All') {
                                return (<option key={index}>{todo}</option>)
                            // }
                        }
                        )}
                    </select>
                </div>
                {/* Display the list of todos */}
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>

            </div>
        </div>
    )
}