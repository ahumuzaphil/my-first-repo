/*const submitEl = document.querySelector("#submit_el")
//console.log(submitEl)
//const taskEl = document.querySelector("task_el")
let listStr = []
const inputEl = document.querySelector("#task_el")
const ulEl = document.querySelector(".ul_el")

submitEl.addEventListener("click", (e) => {
    e.preventDefault()
   console.log("wait")

    listStr.push(inputEl.value)
    inputEl.value = " "
    renderList()
})
    let listEl = " "
    function renderList(){
for(let i =0;i < listStr.length;i++){
    listEl = "<li>" + " " + listStr[i] + " " + "</li>"
}
ulEl.innerHTML += listEl
    }*/


    const taskEl = document.querySelector("#task_el");
    const submitEl = document.querySelector("#submit_el");
    const ulEl = document.querySelector(".ul_el");


    submitEl.addEventListener("click", submit);
    ulEl.addEventListener("click", deleteItem);


    function submit(e){
        e.preventDefault();
        if(!taskEl.value){
            alert("please enter msg")
            ulEl = " ";
        }
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo_el");
     
    const todoList = document.createElement("li");
    todoList.textContent = taskEl.value;
    taskEl.value = " "
    todoList.classList.add("todo_list");
    todoDiv.appendChild(todoList);

    const btn = document.createElement("button");
    btn.innerText = "Delete"
    btn.classList.add("btn_el");
    todoDiv.appendChild(btn);

    ulEl.appendChild(todoDiv)
    deleteItem()
     
    }

    function deleteItem(e){
        const item = e.target
        if(item.classList[0] === "btn_el"){
        const todo = item.parentElement;
        todo.remove()
    }
    }
