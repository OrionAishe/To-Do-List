let Task = "";
let Tasks = document.querySelector(".lista");
let texto = document.querySelector(".text");
let TaskCompleted = [];
let Add;

if (texto != null) {
    texto.addEventListener("keydown", (tecla) => {
        if (tecla.key === "Enter") {
            Adicionar1();
        } else {
            return;
        }
    }, false);
}

function NovaTask() {
    Add = document.querySelector(".Add");
    document.querySelector(".v").classList.toggle("vClick");
    document.querySelector(".h").classList.toggle("vClick");
    Add.classList.toggle("AddClick");
    document.querySelector("header").classList.toggle("blur");
    document.querySelector(".Completed").classList.toggle("blur");
    document.querySelector(".NovaTask").classList.toggle("NovaTaskClick");
    document.querySelector(".text").focus();
    texto = document.querySelector(".text");
    texto.addEventListener("keydown", (tecla) => {
        if (tecla.key === "Enter") {
            Adicionar1();
        } else {
            return;
        }
    }, false);
}

function Adicionar1() {
    Task = document.querySelector(".text").value;
    document.querySelector(".text").value = "";
    Tasks = document.querySelector(".lista");
    TaskVazia(Task, Tasks);
    NovaTask();
}

function Adicionar2() {
    Task = document.querySelector(".text").value;
    document.querySelector(".text").value = "";
    Tasks = document.querySelector(".lista");
    TaskVazia(Task, Tasks);
}

function TaskVazia(Task, Tasks){
    if (Task != "") {
        let li = document.createElement("li");
        let span = document.createElement("span");
        li.appendChild(span);
        li.appendChild(document.createTextNode(Task));
        li.classList.add("Task")
        Tasks.appendChild(li);
        li.addEventListener('click', ()=> {TarefaCompleta(li)});
    }
    return;
}

function TarefaCompleta(Tarefa) {
    Tarefa.classList.toggle("Completo");
    if (Tarefa.parentElement.className == "TaskCompleta") {
        document.querySelector(".lista").appendChild(Tarefa);
    } else {
        document.querySelector(".TaskCompleta").appendChild(Tarefa);
    }
}