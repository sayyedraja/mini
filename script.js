
const notesContainer = document.querySelector(".notes-container")
const notesBox = document.querySelectorAll(".notes-box")
const btn = document.querySelector(".btn")

function updateStorage() {
    localStorage.setItem("notesBox", notesContainer.innerHTML)
}

btn.addEventListener("click", function(){
    let createNotes = document.createElement("p");
    let img = document.createElement("img");
    createNotes.className = "notesBox";
    createNotes.setAttribute("contenteditable", "true");
    img.src = "https://www.shutterstock.com/image-vector/trash-delete-icon-isolated-on-260nw-1937456671.jpg"
    notesContainer.appendChild(createNotes).appendChild(img);

});

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }
})

