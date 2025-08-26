function addTask() {
  const taskInput = document.getElementById("task-input");
  const projectInput = document.getElementById("project-input");
  const todoList = document.querySelector("#todo ul");

  if (taskInput.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = `[${projectInput.value}] ${taskInput.value}`;
  li.draggable = true;

  li.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", li.outerHTML);
    li.remove();
  });

  todoList.appendChild(li);
  taskInput.value = "";
}

// Permitir arrastar entre colunas
document.querySelectorAll(".column ul").forEach((ul) => {
  ul.addEventListener("dragover", (e) => e.preventDefault());
  ul.addEventListener("drop", (e) => {
    e.preventDefault();
    ul.insertAdjacentHTML("beforeend", e.dataTransfer.getData("text/plain"));
    ul.lastChild.draggable = true;
  });
});

