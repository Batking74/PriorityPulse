import React, { useState } from "react";

export default function DropdownComponent({ tasks }) {
    const [taskChecked, setTaskChecked] = useState([]);
    const toggleTask = (index) => {
        setTaskChecked((prevChecked) => {
            const updatedChecked = [...prevChecked];
            updatedChecked[index] = !updatedChecked[index];
            return updatedChecked;
        });
    };
    return (
        <div className="Dropdown">
            {tasks.map(({ Task, Key }) => {
                return (
                    <p key={Key}>
                        <input
                            type="checkbox"
                            checked={taskChecked[Key] || false}
                            onChange={() => toggleTask(Key)} />
                        {Task}
                    </p>
                )
            })}
        </div>
    );
}