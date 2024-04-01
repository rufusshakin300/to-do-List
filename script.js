let submitBtn = document.getElementById("addTaskBtn")
submitBtn.addEventListener('click',displayTask);

function displayTask(){
    let taskInput= document.getElementById('taskInput');
    let taskData = taskInput.value.trim();
    if(taskData !=""){
        let taskText =document.createElement('li');
        taskText.id ="tasktext";
        taskText.innerText = taskData;
        //create a del button 
        let delBtn = document.createElement("button");
        delBtn.className ="deleteTask";
        delBtn.innerText ="Delete";
        
        //function delete task
        delBtn.addEventListener('click',()=>{
            taskText.remove();
        })
        taskText.appendChild(delBtn);
        document.getElementById("taskList").appendChild(taskText);      
        taskInput.value = "";
       
    }
    else {
        alert("Please enter a task.");
    }

};

