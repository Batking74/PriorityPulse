// Importing Components/Modules
import { CategorySelectComponent, CategoryDisplayComponent } from '../components/UI/CategoryComponent';
import PriorityStatus from '../components/UI/PriorityStatus';
import DeletePriority from '../components/UI/DeletePriority';
import PriorityNames from '../components/UI/PriorityNames';
import OverlayForm from '../components/UI/OverlayForm';
import React, { useState } from 'react';

export default function HomePage() {
    const [showPriorityForm, setShowPriorityForm] = useState(false);
    const displayPriorityForm = () => {
        setShowPriorityForm(true);
    };
    return (
        <div className="Main-Container">

            {/* Button to Add Priority */}
            <div className="Add-Priority-Btn-Container">
                <button onClick={displayPriorityForm}>Add Priority</button>
            </div>
            <CategorySelectComponent />
            <div className='Priority-List-Main-Container'>
                <h2>Priority List</h2>

                {/* Rendering All Priorities */}
                <div className='Priority-List-Container'>
                    <PriorityNames />
                    <PriorityStatus />
                    <CategoryDisplayComponent />
                    <DeletePriority />
                </div>
            </div>

            {/* Rendering Overlay Form on "Add Priority" button click */}
            {showPriorityForm && <OverlayForm props={{
                DisplayType: 'Regular',
                setShowPriorityForm: setShowPriorityForm
            }} />}
        </div>
    );
}