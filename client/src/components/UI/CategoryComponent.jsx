import React, { useState } from "react";
import OverlayForm from "./OverlayForm";

export function CategorySelectComponent() {
    const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);
    const displayAddCategoryForm = () => {
        setShowAddCategoryForm(true);
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

                {/* Add Category Form Overlay */}
                {showAddCategoryForm && <OverlayForm props={{
                setShowPriorityForm: setShowAddCategoryForm,
                displayCategory: displayCategory
            }} />}
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