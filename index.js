const { deleteCookie } = require("undici-types");

function handFormSubmit(event){
    event.preventDefault();

    const postDetails = {
        imageUrl : event.target.imageUrl.value,
        desc : event.target.desc.value
    }

    axios.post (`http://localhost:3000/post`,postDetails)
    .then(res => {
        display(res.data);
    })
    .catch(err => console.log(err))
}

document.addEventListener('DOMContentLoaded',async()=> {

    axios.get(`http://localhost:3000/post`)
    .then(res => {
        display(res.data)
    })
    .catch(err => console.log(err))
})

function display(data){

    const posts = document.querySelector('.div')

    const div = document.createElement('div');

    const image = document.createElement('img');
    image.src=data.imageUrl;
    image.alt='Posted Image';

    const desc=document.createElement('p');
    desc.textContent=data.desc; 

    const cmtBtn = document.createElement('button');
    cmtBtn.textContent='Comment';

    div.appendChild(image);
    div.appendChild(desc);
    posts.appendChild(div);

    const form=document.createElement('form');
    form.classList='form'

    const input = document.createElement('input');
    input.type='text';
    input.classList='cmt'
    input.placeholder='Write a Comment...';

    const sendBtn = document.createElement('button');
    sendBtn.textContent='Send';

    form.appendChild(input);
    form.appendChild(sendBtn);
    posts.appendChild(form);

    sendBtn.addEventListener('click',(event) => {
        event.preventDefault();
        const comment = event.target.cmt.value;
        axios.post(`http://localhost:3000/comments`,comment)
        .then(res => {
            displayComment(res);
        })
        .catch(err => console.log(err)) 
    })
}
function displayComment(data){
    const cDiv=document.createElement('div');
    const c=document.createElement('p');
    c.innerHTML=`data.text`;
    cDiv.appendChild(c);
    form.reset();
}
