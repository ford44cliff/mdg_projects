// Dictionary to store todo data
const todoData = {
  tasks: [],
  
  // Add a task to the dictionary
  addTask(taskText) {
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false,
      createdAt: new Date().toLocaleString()
    };
    this.tasks.push(task);
    return task;
  },
  
  // Remove a task by id
  removeTask(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  },
  
  // Toggle task completion status
  toggleTask(taskId) {
    const task = this.tasks.find(task => task.id === taskId);
    if(task) {
      task.completed = !task.completed;
    }
  },
  
  // Get all tasks
  getAllTasks() {
    return this.tasks;
  },
  
  // Save data to localStorage
  saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(this.tasks));
    console.log("Tasks saved to localStorage");
  },
  
  // Load data from localStorage
  loadFromStorage() {
    const savedTasks = localStorage.getItem('todoList');
    if(savedTasks) {
      this.tasks = JSON.parse(savedTasks);
      console.log("Tasks loaded from localStorage");
    }
  },
  
  // Clear all tasks
  clearAll() {
    this.tasks = [];
    localStorage.removeItem('todoList');
  }
};

// Auto-load tasks when the file is loaded
todoData.loadFromStorage();
