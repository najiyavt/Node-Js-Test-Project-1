
function handFormSubmit(event){
    event.preventDefault();

    const postDetails = {
       imageUrl : event.target.imageUrl.value,
       description : event.target.description.value,
    }
    console.log(postDetails)
    axios.post (`http://localhost:3000/post`, postDetails)
    .then(res => {
        if(res.status === 201){
           display(res.data);
           event.target.reset()
        }else{
            console.log("Failed")
        }
    })
    .catch(err => console.log(err))
}

document.addEventListener('DOMContentLoaded',async()=> {

    axios.get(`http://localhost:3000/post`)
    .then(res => {
        console.log(res.data)
        const postBox = document.querySelector('.post-box');//change to querySelector
        postBox.innerHTML=''
        res.data.forEach(post => {
           display(post)
        })
    })
    .catch(err => console.log(err))
})

function display(data){

    const postBox = document.querySelector('.post-box');

    const div1 = document.createElement('div');
    const image = document.createElement('img');
    image.src = data.imageUrl;
    image.classList='image';

    div1.appendChild(image);

    const desc=document.createElement('p');
    desc.textContent=data.description;
    div1.appendChild(desc);

    postBox.appendChild(div1);

    const div2=  document.createElement('div');

    const form=document.createElement('form');
    form.classList='form';

    const input = document.createElement('input');
    input.type='text';
    input.placeholder='Write a Comment...';

    const sendBtn = document.createElement('button');
    sendBtn.textContent='Send';

    form.appendChild(input);
    form.appendChild(sendBtn);

    form.addEventListener('submit',(event) => {
        event.preventDefault();
        const comment = input.value.trim();
        if(comment !==''){
            axios.post(`http://localhost:3000/comments`,{ postId: data.id, text:comment })
        .then(res => {
            if(res.status===201){
               const newComment = res.data;
               const newDiv = document.createElement('div');
               newDiv.textContent=newComment.text;
               div2.appendChild(newDiv);
               form.reset()
            }else{
                console.error("Failed")
            }
        })
        .catch(err => console.log(err)) ;
        }
    })
    div2.appendChild(form);

    if(data.Comment && Array.isArray(data.Comment) && data.Comment.length>0){
        data.Comment.forEach(comment => {
            const newDiv = document.createElement('div');
            newDiv.textContent=comment.text;
            div2.appendChild(newDiv)
        })
    }
    postBox.appendChild(div2);
}