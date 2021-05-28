//alert('connected');
var h = document.createElement('h6');
var myValue = document.createTextNode('Hii Rahul') ;
h.appendChild(myValue);
document.querySelector('h1').appendChild(h);
//----------------------------
// loop concept
/*
var value = 5 ;
while(value > 0) {
    console.log(value);
    value-- ;  
}
*/
//-----------------------------

var ul = document.getElementById('list');
var li;


var addButton = document.getElementById('add');
addButton.addEventListener('click' , addItem);


var removeButton = document.getElementById('remove');
removeButton.addEventListener('click' , removeItem);

var removeButton1 = document.getElementById('removeall');
removeButton1.addEventListener('click' , removeAllItem);


let itemsArray=localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) :[] 

localStorage.setItem('items' , JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))
//JSON.parse(localStorage.getItem('items'));
function addItem() {
    var input = document.getElementById('input'); 
    var item = input.value ;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);

    
    if(item === '') {
        
        let para = document.createElement('p');
         para.textContent ='Dear please, Enter your TODO' ;
         input.insertAdjacentElement('afterend' , para);
         var element =document.getElementById('container');
         para.style.opacity = '1';
         
         setTimeout(()=> {
            para.className ='visual';
            para.style.opacity ='0';
            para.remove();
         },2900)
        //document.querySelector('input').after(para) 
        //input.parentNode.insertBefore(para , input.nextSibling);
        return false ;   
    }
    else {

        
        li = document.createElement('li');  //create li
        
        var checkbox =document.createElement('input');   //create input inside checkbox
        checkbox.type = 'checkbox';     //define type of checkbox
        checkbox.setAttribute('id' , 'check') ;   // set the attribute like[id='check']
        
        var label = document.createElement('label');    //create label
        label.setAttribute('for' , 'item') ; // optional(set an attribute like [for='item'] )

        //add these elements on web page
       // ul.appendChild(label);    // add a label
        li.appendChild(checkbox);  //add a checkbox inside li
        label.appendChild(textnode);  // add a textnode inside label
        li.appendChild(label);      // add label end
        ul.insertBefore(li, ul.childNodes[li.length]) ;  // insert the li into 1st index position under ul.if i want to insert the li into last position then just wrilteul.childNodes[li.length];
       
        itemsArray.push(item);
    localStorage.setItem('items' , JSON.stringify(itemsArray))
    
        setTimeout(() => {
            li.className = 'visual' ;  // this li will be show after 2 milisec
        }, 2) ;

        input.value = '';  // to refresh the input text,what we have typed 
    }
    
}


function removeItem() {
    li = ul.children ;
    //console.log(li);
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index]) ;
        }
        
    }
    
}

function removeAllItem() {
    li=ul.children ;
    for(let index = 0 ; index< li.length ; index++) {
        while(li[index] && li[index].children[0]) {
            ul.removeChild(li[index]);
        }
    }
}
















