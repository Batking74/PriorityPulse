import React, { useState } from "react";

export function CategorySelectComponent() {
    const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState('');

    const handleAddCategory = () => {
        if (newCategory.trim() !== '') {
            setCategories((prevCategories) => [...prevCategories, newCategory]);
            setNewCategory('');
            closeAddCategoryForm();
        }
    };

    const displayAddCategoryForm = () => {
        setShowAddCategoryForm(true);
    };

    const closeAddCategoryForm = () => {
        setShowAddCategoryForm(false);
    };

    const displayCategory = (index) => {
        if ((typeof index) != 'object') {
            // Display specific category index
        }
        else {
            // Display All Categories
        }
    }
    return (
        <div className="Select-Category-Container">
            <div>
                <h2>Select Category</h2>
                {/* Add Category button */}
                <button onClick={displayAddCategoryForm}>Add Category</button>
            </div>
            <div>
                {/* Displaying Categories */}
                <button onClick={displayCategory}>All</button>
                {categories.map((category, index) => (
                    <button
                        onClick={() => displayCategory(index)}
                        key={index}>
                        {category}
                    </button>
                ))}

                {/* Add Category Form Overlay */}
                {showAddCategoryForm && (
                    <div className="Priority-Form-Overlay">
                        <div className="Priority-Form-Container">
                            <button onClick={closeAddCategoryForm}>Close</button>
                            <div>
                                <label>Enter Category Name:</label>
                                <input
                                    placeholder='Category name'
                                    maxLength={10}
                                    type="text"
                                    value={newCategory}
                                    onChange={(e) => setNewCategory(e.target.value)}
                                />
                                <button onClick={handleAddCategory}>Done</button>
                            </div>
                        </div>
                    </div>
                )}
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