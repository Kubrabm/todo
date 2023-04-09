
document.querySelector('#add').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">delete</button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }

    function CheckTask(){
        let count=document.querySelectorAll('.box').length;
        let alert_messages=document.querySelector('.alert');
        
        if(count>0){
            // alert_messages.style.display='none';
            alert_messages.classList.add('d-none');
        }
        else{
            // alert_messages.style.display='block';}
            alert_messages.classList.remove('d-none');
        }
    }
    
    CheckTask();
}