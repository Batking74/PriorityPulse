import React, { useState } from "react";


export default function DropdownComponent({ tasks, Key }) {
    const [taskChecked, setTaskChecked] = useState([]);
    const toggleTask = (index) => {
        setTaskChecked((prevChecked) => {
            const updatedChecked = [...prevChecked];
            updatedChecked[index] = !updatedChecked[index];
            return updatedChecked;
        });
    };
    return (
        <div key={Key} className="Dropdown">
            {tasks.map(({ Task, id }) => {
                return (
                    <p>
                        <input
                            type="checkbox"
                            checked={taskChecked[id] || false}
                            onChange={() => toggleTask(id)} />
                        {Task}
                    </p>
                )
            })}
        </div>
    );
}