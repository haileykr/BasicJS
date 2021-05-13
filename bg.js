const body=document.querySelector('body');

function generateRandomNumber(){
    const number = Math.floor(Math.random()*3);
    return number;
}




function showImage(imageNumber){
    const image = new Image();
    image.src = `./images/${imageNumber}.jpg `;
    image.classList.add('bgImage');
    body.appendChild(image);
}
function init(){
    const randomNumber = generateRandomNumber();
    showImage(randomNumber);
}

init();