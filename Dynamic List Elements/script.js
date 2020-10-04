const input = document.getElementById("comment");
console.log(input.value);

function setup(){
    console.log('Post is clicked');
    const commentList = document.querySelector('#commentList');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value))
    commentList.appendChild(li);
};

// document.getElementById("comment").value = "test"; 
document.querySelector("#postComment").addEventListener('click',setup);