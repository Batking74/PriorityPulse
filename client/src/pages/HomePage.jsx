import { CategorySelectComponent, CategoryDisplayComponent } from '../components/UI/CategoryComponent';
import PriorityNames from '../components/UI/PriorityNames';
import PriorityStatus from '../components/UI/PriorityStatus';
import DeletePriority from '../components/UI/DeletePriority';
import React from 'react';

export default function HomePage() {
    return (
        <div className="Main-Container">
            <div className="Add-Priority-Btn-Container">
                <button>Add Priority</button>
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
        </div>
    );
}