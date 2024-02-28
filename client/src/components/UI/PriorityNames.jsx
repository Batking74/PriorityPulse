import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import DropdownComponent from "./DropdownComponent";
import OverlayForm from "./OverlayForm";

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
    return (
        <div className='Priority-Names-Container'>
            <h3>List</h3>
            <div>
                <p className="Priority-Name" onClick={() => toggleDropdown(0)}>
                    Go to the gym
                    <FontAwesomeIcon onClick={() => startEditing(0)} icon={faPenToSquare} />
                </p>
                {editingPriority && <OverlayForm setShowPriorityForm={setEditingPriority} />}
                {dropdownVisibility[0] && <DropdownComponent tasks={[
                    {
                        Key: 1,
                        Task: 'Do 20 Reps'
                    },
                    {
                        Key: 2,
                        Task: 'Do 30 Pushups'
                    },
                ]} />}
            </div>
            <div>
                <p className="Priority-Name" onClick={() => toggleDropdown(1)}>
                    Eat at least 50 grams of protein
                    <FontAwesomeIcon onClick={() => startEditing(1)} icon={faPenToSquare} />
                </p>
                {dropdownVisibility[1] && <DropdownComponent tasks={[
                    {
                        Key: 1,
                        Task: 'Eat Steak'
                    },
                    {
                        Key: 2,
                        Task: 'Eat Almonds'
                    },
                ]} />}
            </div>
            <div>
                <p className="Priority-Name" onClick={() => toggleDropdown(2)}>
                    Run for 1 hour
                    <FontAwesomeIcon onClick={() => startEditing(2)} icon={faPenToSquare} />
                </p>
                {dropdownVisibility[2] && <DropdownComponent tasks={[
                    {
                        Key: 1,
                        Task: 'Drink 3 bottles of water'
                    },
                    {
                        Key: 2,
                        Task: 'Walk after 5 laps'
                    },
                ]} />}
            </div>
        </div>
    )
}