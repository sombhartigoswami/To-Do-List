let inputbox = document.querySelector("input");
let btn = document.querySelector("button");
let listContainer =  document.querySelector(".list-container")
// console.table([inputbox,btn,listContainer]);

btn.addEventListener("click", (e) => {
    // console.log("button was clicked");
    addTask();
    
})

function addTask(){

    if(inputbox.value === ""){
        alert("please write something");
    }

    else{
        let li = document.createElement("LI");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);

        let span = document.createElement("SPAN");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputbox.value = "";
    savedata();


}

// delete the task and checked/unchecked the  --->
// li and span should be in uppercase form

listContainer.addEventListener("click" ,(e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();

    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata()

    }

})

//save the data and display the data  --->

function savedata(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function DisplayData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
DisplayData();