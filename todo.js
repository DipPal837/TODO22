function addTask(){
    const input=document.getElementById("task-input");
    const taskText=input.value.trim();

    if (taskText === " ") return;
    const li=document.createElement("li");

    const span =document.createElement("span");
    span.textContent=taskText;

    const delBtn=document.createElement("button");
    delBtn.textContent="Delete";
    delBtn.onclick=function() {
        li.remove();

    };
    li.appendChild(span);
    li.appendChild(delBtn);

    document.getElementById("task-list").appendChild(li);
    input.value= " ";
}