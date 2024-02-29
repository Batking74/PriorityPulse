import React, { useState } from "react";

export default function DropdownComponent({ tasks, isComplete }) {
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
            {tasks.map(({ Task, Key }) => (
                isComplete ?
                    <p key={Key}>
                        <input
                            type="checkbox"
                            checked={true}
                            disabled={true} />
                        {Task}
                    </p>
                    :
                    <p key={Key}>
                        <input
                            type="checkbox"
                            checked={taskChecked[Key] || false}
                            onChange={() => toggleTask(Key)} />
                        {Task}
                    </p>
            ))}
        </div>
    );
}