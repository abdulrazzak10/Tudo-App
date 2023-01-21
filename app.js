var mn=document.getElementById('main')
var inp=document.getElementById('inp')

function  getvalue(){
     if(!inp.value){
        alert("Enter Value")
     }else{
        var li=document.createElement('li')
        var litext=document.createTextNode(inp.value)
        li.appendChild(litext)
        mn.appendChild(li)
        inp.value=""

        var editbtn=document.createElement('BUTTON')
        var editbtntext=document.createTextNode('Edit todo')
        editbtn.appendChild(editbtntext)
        editbtn.setAttribute("onclick","edittodo(this)")
        li.appendChild(editbtn)
        mn.appendChild(li)


        var delbtn=document.createElement('BUTTON')
        var delbtntext=document.createTextNode('delete todo')
        delbtn.appendChild(delbtntext)
        delbtn.setAttribute("onclick","deletetodo(this)")
        li.appendChild(delbtn)
        mn.appendChild(li)
    }

}


function edittodo(element){
    var newval=prompt("Enter New Value")
    element.parentNode.firstChild.nodeValue=newval
}
function deletetodo(element){
    element.parentNode.firstChild.remove()
}
function del(){
    mn.innerHTML=""
}