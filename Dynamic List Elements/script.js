const input = document.getElementById("comment");
console.log(input.value);

function setup(){
    console.log('Post is clicked');
    const commentList = document.querySelector('#commentList');
    const li = document.createElement('li');
    if(input.value !=''){
    li.appendChild(document.createTextNode(input.value))
    commentList.appendChild(li);}
    input.value = '';
};

// document.getElementById("comment").value = "test"; 
document.querySelector("#postComment").addEventListener('click',setup);