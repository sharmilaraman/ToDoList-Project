// Select DOM elements
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Add task function
function addTask() {
    const taskText = todoInput.value.trim(); // Get input value and trim whitespace

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item (task)
    const li = document.createElement("li");
    li.className = "todo-item";

    // Task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    // Append text and delete button to the list item
     li.appendChild(taskSpan);
    li.appendChild(deleteButton); 

    // Add the list item to the to-do list
    todoList.appendChild(li);

    // Clear input field
    todoInput.value = "";

    // Delete task functionality
    deleteButton.addEventListener("click", () => {
        todoList.removeChild(li);
    });
}
// Event listener for the Add button
addButton.addEventListener("click", addTask);
// Allow adding task on pressing Enter
todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
