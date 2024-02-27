import { CategorySelectComponent, CategoryDisplayComponent } from '../components/UI/CategoryComponent';
import PriorityNames from '../components/UI/PriorityNames';
import PriorityStatus from '../components/UI/PriorityStatus';
import DeletePriority from '../components/UI/DeletePriority';
import React, { useState, useEffect } from 'react';

export default function HomePage() {
    const [showPriorityForm, setShowPriorityForm] = useState(false);

    const displayPriorityForm = () => {
        setShowPriorityForm(true);
    };

    const closePriorityForm = () => {
        setShowPriorityForm(false);
    };

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            setNewTodo('');
        }
    };

    return (
        <div className="Main-Container">
            <div className="Add-Priority-Btn-Container">
                <button onClick={displayPriorityForm}>Add Priority</button>
            </div>
            <CategorySelectComponent />
            <div className='Priority-List-Main-Container'>
                <h2>Priority List</h2>

                <div className='Priority-List-Container'>
                    <PriorityNames />
                    <PriorityStatus />
                    <CategoryDisplayComponent />
                    <DeletePriority />
                </div>
            </div>



            {showPriorityForm && (
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
                                <option value="">Health</option>
                                <option value="">Tech</option>
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
            )}
        </div>
    );
}