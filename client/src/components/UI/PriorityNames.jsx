import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import DropdownComponent from "./DropdownComponent";
import OverlayForm from "./OverlayForm";

export default function PriorityNames({ isComplete }) {
    const [dropdownVisibility, setDropdownVisibility] = useState([]);
    const [editingPriority, setEditingPriority] = useState(null);
    const [priority, setPriority] = useState('');
    const [i, setI] = useState('');

    const toggleDropdown = (index) => {
        setDropdownVisibility((prevVisibility) => {
            const updatedVisibility = [...prevVisibility];
            updatedVisibility[index] = !updatedVisibility[index];
            return updatedVisibility;
        });
    };

    const startEditing = (index, { parentElement }) => {
        if (parentElement.getAttribute('role')) {
            setPriority(parentElement.parentElement.textContent);
            setEditingPriority(true);
            setI(index);
        }
        else {
            setPriority(parentElement.textContent);
            setEditingPriority(true);
            setI(index);

        }
    };
    const tasksArr = [
        [
            {
                Key: 1,
                Task: 'Do 20 Reps'
            },
            {
                Key: 2,
                Task: 'Do 30 Pushups'
            }
        ],
        [
            {
                Key: 1,
                Task: 'Eat Steak'
            },
            {
                Key: 2,
                Task: 'Eat Almonds'
            }
        ],
        [
            {
                Key: 1,
                Task: 'Drink 3 bottles of water'
            },
            {
                Key: 2,
                Task: 'Walk after 5 laps'
            }
        ]
    ]
    return (
        <div className='Priority-Names-Container'>
            <h3>List</h3>
            <div>
                <p className="Priority-Name" onClick={() => toggleDropdown(0)}>
                    Go to the gym
                    {
                        isComplete ? '' :
                            <FontAwesomeIcon onClick={({ target }) => startEditing(0, target)} icon={faPenToSquare} />
                    }
                </p>
                {dropdownVisibility[0] && <DropdownComponent isComplete={isComplete} tasks={tasksArr[0]} />}
            </div>
            <div>
                <p className="Priority-Name" onClick={() => toggleDropdown(1)}>
                    Eat at least 50 grams of protein
                    {
                        isComplete ? '' :
                            <FontAwesomeIcon onClick={({ target }) => startEditing(1, target)} icon={faPenToSquare} />
                    }
                </p>
                {dropdownVisibility[1] && <DropdownComponent isComplete={isComplete} tasks={tasksArr[1]} />}
            </div>
            <div>
                <p className="Priority-Name" onClick={() => toggleDropdown(2)}>
                    Run for 1 hour
                    {
                        isComplete ? '' :
                            <FontAwesomeIcon onClick={({ target }) => startEditing(2, target)} icon={faPenToSquare} />
                    }
                </p>
                {dropdownVisibility[2] && <DropdownComponent isComplete={isComplete} tasks={tasksArr[2]} />}
            </div>

            {/* Rendering Overlay Form on "Fontawsome Icon" click */}
            {editingPriority && <OverlayForm props={{
                DisplayType: 'Regular',
                setShowPriorityForm: setEditingPriority,
                Priority: priority,
                Tasks: tasksArr[i]
            }} />}
        </div>
    )
}