const circle = document.getElementById('child');
const parent = document.getElementById("parent")


//move system
let x = 0;
let y = 0;

function updatePosition() {
    if((x >= 0 && x <= 450) && (y >= 0 && y <= 450)){
        circle.style.transform = `translate(${x}px, ${y}px)`;
    }
}

window.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'ArrowUp':
            if(y >= 5){
                y -= 1;
                break;
            }else{
                break;
            }
        case 'ArrowDown':
            if(y <= 445){
                y += 1;
                break;
            }else{
                break;
            }
        case 'ArrowLeft':
            if(x >= 5){
                x -= 1;
                break;
            }else{
                break;
            }
        case 'ArrowRight':
            if(x <= 445){
                x += 1;
                break;
            }
    }
    console.log(x,y);
    updatePosition();
});
