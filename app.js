let form = document.getElementById("form")
let taskUl = document.querySelector(".task_ul")
let taskInp = document.getElementById("input")



form.addEventListener("submit", (e) => {
    e.preventDefault();

    let li = document.createElement("li")
    li.classList = "task_li"
    taskUl.appendChild(li)

    let radio = document.createElement("button")
    radio.classList = "btn_radio"
    li.appendChild(radio)
    

    
    let p = document.createElement("p")
    p.classList = "p"
    li.appendChild(p)

    
    p.innerText = taskInp.value;

    let del = document.createElement("i")
    del.classList = "fa-solid fa-trash"

    li.appendChild(del)




    
    radio.addEventListener("click", () => {
        p.style = "text-decoration: line-through; color: red;"
        radio.style = "background-color: #0ada14;"
    })

    del.addEventListener("click", () => {
        li.style = "display: none;"
    })
    
    taskInp.value = "";
})