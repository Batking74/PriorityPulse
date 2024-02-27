import { CategoryDisplayComponent } from '../components/UI/CategoryComponent';
import PriorityNames from '../components/UI/PriorityNames';
import PriorityStatus from '../components/UI/PriorityStatus';
import React from 'react';

export default function CompletedPrioritiesPage() {
    return (
        <div className="Main-Container">
            <div className='Priority-List-Main-Container'>
                <h2>Completed Priorities</h2>
                <div className='Priority-List-Container'>
                    <PriorityNames />
                    <PriorityStatus />
                    <CategoryDisplayComponent />
                </div>
            </div>
        </div>
    )
}