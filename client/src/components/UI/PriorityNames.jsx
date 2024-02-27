import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import DropdownComponent from "./DropdownComponent";

export default function PriorityNames() {
    const [dropdownVisibility, setDropdownVisibility] = useState([]);
    const [editingPriority, setEditingPriority] = useState(null);

    const toggleDropdown = (index) => {
        setDropdownVisibility((prevVisibility) => {
            const updatedVisibility = [...prevVisibility];
            updatedVisibility[index] = !updatedVisibility[index];
            return updatedVisibility;
        });
    };

    const startEditing = () => {
        setEditingPriority(true);
    };

    const stopEditing = () => {
        setEditingPriority(false);
    };
    return (
        <div className='Priority-Names-Container'>
            <h3>List</h3>
            <div>
                <p className="Priority-Name" onClick={() => toggleDropdown(0)}>
                    Go to the gym
                    <FontAwesomeIcon onClick={() => startEditing(0)} icon={faPenToSquare} />
                </p>
                {editingPriority && (
                    <div className="Priority-Form-Overlay">
                        <div className="Priority-Form-Container">
                            <button onClick={stopEditing}>Close</button>
                            <input value="Go to the gym" maxLength={30} type="text" />
                            <select name="" id="">
                                <option value="">Health</option>
                                <option value="">Tech</option>
                            </select>
                        </div>
                    </div>
                )}
                {dropdownVisibility[0] && <DropdownComponent tasks={[
                    {
                        id: 1,
                        Task: 'Do 20 Reps'
                    },
                    {
                        id: 2,
                        Task: 'Do 30 Pushups'
                    },
                ]}
                Key={1} />}
            </div>
            <div>
                <p className="Priority-Name" onClick={() => toggleDropdown(1)}>
                    Eat at least 50 grams of protein
                    <FontAwesomeIcon onClick={() => startEditing(1)} icon={faPenToSquare} />
                </p>
                {editingPriority && (
                    <div className="Priority-Form-Overlay">
                        <div className="Priority-Form-Container">
                            <button onClick={stopEditing}>Close</button>
                            <input value="Eat at least 50 grams of protein" maxLength={30} type="text" />
                            <select name="" id="">
                                <option value="">Health</option>
                                <option value="">Tech</option>
                            </select>
                        </div>
                    </div>
                )}
                {dropdownVisibility[1] && <DropdownComponent tasks={[
                    {
                        id: 1,
                        Task: 'Eat Steak'
                    },
                    {
                        id: 2,
                        Task: 'Eat Almonds'
                    },
                ]}
                Key={2} />}
            </div>
            <div>
                <p className="Priority-Name" onClick={() => toggleDropdown(2)}>
                    Run for 1 hour
                    <FontAwesomeIcon onClick={() => startEditing(2)} icon={faPenToSquare} />
                </p>
                {editingPriority && (
                    <div className="Priority-Form-Overlay">
                        <div className="Priority-Form-Container">
                            <button onClick={stopEditing}>Close</button>
                            <input value="Run for 1 hour" maxLength={30} type="text" />
                            <select name="" id="">
                                <option value="">Health</option>
                                <option value="">Tech</option>
                            </select>
                        </div>
                    </div>
                )}
                {dropdownVisibility[2] && <DropdownComponent tasks={[
                    {
                        id: 1,
                        Task: 'Drink 3 bottles of water'
                    },
                    {
                        id: 2,
                        Task: 'Walk after 5 laps'
                    },
                ]}
                Key={3} />}
            </div>
        </div>
    )
}