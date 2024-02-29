// Importing Modules/Components
import React, { useEffect, useState } from "react";

export default function OverlayForm({ props }) {
    const { DisplayType, setShowPriorityForm, displayCategory, Tasks, Priority } = props;
    const [newCategory, setNewCategory] = useState('');
    const [newPriority, setNewPriority] = useState([]);
    const [categories, setCategories] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);

    // Handling Click Events
    const closePriorityForm = () => setShowPriorityForm(false);
    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            setNewTodo('');
        }
    };
    const handleAddCategory = () => {
        setCategories((prevCategories) => [...prevCategories, newCategory]);
        setNewCategory('');
        closePriorityForm();
        console.log(categories)
    };
    const createPriority = () => {
        console.log(newPriority)
        console.log(todos)
    }
    // Returning JSX
    return (
        <div className="Priority-Form-Overlay">
            <div className="Priority-Form-Main-Container">
                {
                    DisplayType
                        ?
                        // Rendering Regular Priority Form
                        <div className="Divider">
                            <button onClick={closePriorityForm}>Close</button>
                            <div className="Priority-Form-Container">
                                <input
                                    placeholder='Enter your priority'
                                    maxLength={50}
                                    value={Priority ? Priority : ''}
                                    onInput={({ target }) => setNewPriority(target.value)}
                                    type="text" />
                                <input
                                    placeholder='Enter your Todo'
                                    maxLength={20}
                                    type="text"
                                    value={newTodo}
                                    onChange={(e) => setNewTodo(e.target.value)} />
                                <div className="Overlay-Options-Container">
                                    <button onClick={handleAddTodo}>Add Todo</button>
                                    <select name="" id="">
                                        <option value="">Select a Category</option>
                                        {categories.map((category, index) => (
                                            <option key={index}>{category}</option>
                                        ))}
                                    </select>
                                    <button onClick={createPriority}>Done</button>
                                </div>
                            </div>
                            {/* Display the list of todos */}
                            <div>
                                <ul>
                                    {
                                        Tasks
                                            ? Tasks.map(({ Task }, index) => <li key={index}>{Task}</li>)
                                            : todos.map((todo, index) => <li key={index}>{todo}</li>)
                                    }
                                    {Tasks ? todos.map((todo, index) => <li key={index}>{todo}</li>) : ''}
                                </ul>
                            </div>
                        </div>
                        :
                        // Rendering Category Form
                        <div className="Category-Form-Container">
                            {/* Displaying All Categories */}
                            {categories.map((category, index) => (
                                <button
                                    onClick={() => displayCategory(index)}
                                    key={index}>
                                    {category}
                                </button>
                            ))}
                            <button onClick={closePriorityForm}>Close</button>
                            <div>
                                <label>Enter Category Name:</label>
                                <input
                                    placeholder='Category name'
                                    maxLength={10}
                                    type="text"
                                    onInput={({ target }) => setNewCategory(target.value)} />
                                <button onClick={handleAddCategory}>Done</button>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}