// VARIABLES
let counter = 0;
const colors = ['lightblue', 'lightgreen', 'lightpink', 'lightyellow'];

// FUNCTIONS
function randomColor() {
  const i = Math.floor(Math.random() * colors.length);
  return colors[i];
}

function timeGreetingMessage(hour) {
  if (hour < 12) return "Good Morning!";
  else if (hour < 18) return "Good Afternoon!";
  else return "Good Evening!";
}

// ELEMENTS
const nameInput = document.getElementById('nameInput');
const greetBtn = document.getElementById('greetBtn');
const greeting = document.getElementById('greeting');

const timeBtn = document.getElementById('timeBtn');
const timeGreeting = document.getElementById('timeGreeting');

const bgBtn = document.getElementById('bgBtn');
const colorBox = document.getElementById('colorBox');

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const todoList = document.getElementById('todoList');

const toggleBtn = document.getElementById('toggleBtn');
const secret = document.getElementById('secret');

const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const counterValue = document.getElementById('counterValue');

// EVENTS & DOM MANIPULATION

// Greeting user
greetBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name === "") {
    greeting.textContent = "Please enter your name!";
  } else {
    greeting.textContent = `Hello, ${name}! Welcome 👋`;
  }
  greeting.classList.remove('hidden');
});

// Time-based greeting
timeBtn.addEventListener('click', () => {
  const now = new Date();
  const hour = now.getHours();
  timeGreeting.textContent = `${timeGreetingMessage(hour)} The time is ${now.toLocaleTimeString()}`;
});

// Background changer
bgBtn.addEventListener('click', () => {
  const c = randomColor();
  document.body.style.background = c;
  colorBox.style.background = c;
});

// To-Do list (loop concept)
addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task === "") return;
  const li = document.createElement('li');
  li.textContent = task;
  todoList.appendChild(li);
  taskInput.value = "";

  // loop through tasks and log them
  const items = document.querySelectorAll('#todoList li');
  for (let i = 0; i < items.length; i++) {
    console.log(`Task ${i+1}: ${items[i].textContent}`);
  }
});

// Secret toggle
toggleBtn.addEventListener('click', () => {
  secret.classList.toggle('hidden');
});

// Counter
increaseBtn.addEventListener('click', () => {
  counter++;
  counterValue.textContent = counter;
});
decreaseBtn.addEventListener('click', () => {
  counter--;
  counterValue.textContent = counter;
});
