export const getSavedPriorityIds = () => {
    const savedPriorityIds = localStorage.getItem("saved_priorities")
        ? JSON.parse(localStorage.getItem("saved_priorities"))
        : [];
};

export const savePriorityIds = (priorityIdArr) => {
    if (priorityIdArr.length) {
        localStorage.setItem("saved_priorities", JSON.stringify(priorityIdArr));
    } else {
        localStorage.removeItem("saved_priorities");
    }
};

export const removePriorityId = (priorityId) => {
    const savedPriorityIds = localStorage.getItem("saved_priorities")
        ? JSON.parse(localStorage.getItem("saved_priorities"))
        : null;

    if (!savedPriorityIds) {
        return false;
    }

    const updatedSavedPriorityIds = savedPriorityIds?.filter((savedPriorityId) => savedPriorityId !== priorityId);
    localStorage.setItem("saved_priorities", JSON.stringify(updatedSavedPriorityIds));
    return true;
};