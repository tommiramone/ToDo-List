let agregar = document.querySelector("#add");

//Agregar tareas
agregar.addEventListener("click", () => {
  //Tomar valor ingresado
  let nuevaTarea = document.querySelector("#introTask").value;
  //Tomar div del dom
  let divTarea = document.querySelector(".task");

  //Nuevo div para las tareas
  let nuevoDiv = document.createElement("div");
  nuevoDiv.id = "tarea";
  nuevoDiv.setAttribute("data-value", nuevaTarea);

  //Boton para borrar las tareas
  let btn = document.createElement("button");
  btn.id = "delete";
  //Icono de x
  spanIconDel = document.createElement("span");
  spanIconDel.className += "iconify";
  spanIconDel.setAttribute("data-icon", "ep:close-bold");
  spanIconDel.setAttribute("data-width", "25");
  spanIconDel.setAttribute("data-height", "25");
  spanIconDel.style.color = "white";

  btn.append(spanIconDel);

  //Boton para editar las tareas
  let btnEditar = document.createElement("button");
  btnEditar.id = "edit";
  //icono de edicion
  spanIconEdit = document.createElement("span");
  spanIconEdit.className += "iconify";
  spanIconEdit.setAttribute("data-icon", "bx:edit-alt");
  spanIconEdit.setAttribute("data-width", "25");
  spanIconEdit.setAttribute("data-height", "25");
  spanIconEdit.style.color = "white";

  btnEditar.append(spanIconEdit);

  //Div con ambos botones
  let divBtn = document.createElement("div");
  divBtn.id = "divBtn";

  //Agregando elementos al DOM
  divBtn.append(btn);
  divBtn.append(btnEditar);
  nuevoDiv.append(nuevaTarea);
  nuevoDiv.append(divBtn);
  divTarea.append(nuevoDiv);
  document.querySelector("#introTask").value = "";

  //Funcionalidad de editar una tarea
  btnEditar.addEventListener("click", () => {
    //Texto indicativo
    let textoTask = document.querySelector("#texto");
    textoTask.style.display = "block";

    //Input para cambio de tarea
    let inputChange = document.querySelector("#changeTask");
    inputChange.style.display = "block";

    for (let node of divTarea.children) {
      let data = node.getAttribute("data-value");

      //Cambio de valores
      if (data === nuevoDiv.textContent) {
        document.querySelector("#introTask").value = data;
        if (inputChange.value !== "") {
          nuevoDiv.textContent = inputChange.value;
          nuevoDiv.setAttribute("data-value", nuevoDiv.textContent);
          nuevoDiv.append(divBtn);
          inputChange.value = "";
          inputChange.style.display = "none";
          textoTask.style.display = "none";
          // textoTask.classList.add("animate__fadeOutUp");
          // textoTask.classList.remove("animate__delay-1s");
          // inputChange.classList.add("animate__fadeOutUp");
        }
      }
    }
  });

  //Funcionlidad para borrar tareas
  btn.onclick = function () {
    for (let node of divTarea.children) {
      let data = node.getAttribute("data-value");

      if (data === nuevoDiv.textContent) {
        divTarea.removeChild(node);
      }
    }
  };
});
