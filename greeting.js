const form = document.querySelector('.jsForm');
const input  = form.querySelector('input');
const greeting = document.querySelector('.jsGreetings');


function handleSubmit (event){
    event.preventDefault();
    const currentValue = input.value;
    localStorage.setItem('username',currentValue);
    input.value = '';
}

function askName(){
    form.classList.add('show');
    form.addEventListener("submit",handleSubmit);
}

function showGreeting(text){
    greeting.classList.add('show');
    form.classList.remove('show');
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem('username')

    if (!currentUser){
        askName();

    }else {
        showGreeting(currentUser);
        
    }
}
function init(){
    loadName();

}

init();