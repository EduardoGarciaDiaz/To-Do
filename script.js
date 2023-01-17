    import { addTask } from "./components/addTask.js";
    import { displayTasks } from "./components/readTasks.js";

    const btn = document.querySelector("[data-form-btn");

    //2 atributos: que evento necesita escuchar, y que queremos que pase
    btn.addEventListener("click", addTask);

    displayTasks();

    