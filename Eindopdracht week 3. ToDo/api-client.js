const getTasks = async function () {
    const apiURL = `https://wincacademydatabase.firebaseio.com/elieke/tasks.json`
    try {
        const res = await fetch(apiURL, { method: "GET" });
        console.log("response", res);
        const result = await res.json();

        console.log("Before (the raw result):", result);
        let tasks = Object.keys(result).map(key => ({
            id: key,
            description: result[key].description,
            done: result[key].done
        }));
        console.log("After the tasks array", tasks);

        return tasks;
    }
    catch (error) {
        console.log(error);
    }
};

const addTask = async function (task) {
    const apiURL = `https://wincacademydatabase.firebaseio.com/elieke/tasks.json`
    try {
        const res = await fetch(apiURL,
            {
                method: "POST",
                body: JSON.stringify(task)
            });

    }
    catch (error) {
        console.log(error);
    }
};


const deleteTask = async function (taskId) {
    const apiURL = `https://wincacademydatabase.firebaseio.com/elieke/tasks/${taskId}.json`
    try {
        const res = await fetch(apiURL,
            {
                method: "DELETE",
            });

    }
    catch (error) {
        console.log(error);
    }
};

const updateTask = async function (taskId, task) {
    const apiURL = `https://wincacademydatabase.firebaseio.com/elieke/tasks/${taskId}.json`
    try {
        const res = await fetch(apiURL,
            {
                method: "PUT",
                body: JSON.stringify(task)
            });

    }
    catch (error) {
        console.log(error);
    }
};