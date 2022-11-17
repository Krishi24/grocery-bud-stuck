// ****** SELECT ITEMS **********
const alert=document.querySelector('.alert')
const form=document.querySelector('.grocery-form')
const grocery=document.getElementById('grocery')
const submitBtn=document.getElementById('.submit-btn')
const container=document.getElementById('.grocery-container')
const list=document.getElementById('.grocery-list')
const clearBtn=document.getElementById('.clear-btn')



// edit option
let editElement
let editFlag=false
let editID=""
// ****** EVENT LISTENERS **********
//submit form
form.addEventListener('submit',addItem)
// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault()
    const value=grocery.value
    if(value){

    }
    const id = new Date().getTime().toString()
    
    if(value && !editFlag){
       const element=document.createElement('article') 
    element.classList.add('grocery-item')
const attr=document.createAttribute('data-id')
attr.value=id
element.setAttributeNode(attr)
element.innerHTML=`<p class="title">${value}</p>
<div class="btn-container">
<button type="button" class="edit-btn">
<i class="fas fa-edit"></i>
</button>
<button type="button" class="delete-btn">
<i class="fas fa-trash"></i>
</button>
</div>`
list.appendChild(element)
displayAlert("item added to the list","success")
container.classList.add("show-container")


}
    else if(value && editFlag){
console.log("editing")
       
    }
    else{
        displayAlert("please enter value","danger")
    }
}
function displayAlert(text,action){
    alert.textContent=text
       alert.classList.add(`alert-${action}`)

}
setTimeout(function(){
    alert.textContent=""
       alert.classList.add(`alert-${action}`)


},1000)
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
