const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const jump = () => {
    mario.classList.add("jump");
    setTimeout(()=> {
        mario.classList.remove("jump");
    },500);
}

const loop = setInterval (() =>{
    console.log("loop")

    const pipePosi = pipe.offsetLeft;
    const marioPosi = +window.getComputedStyle(mario).bottom.replace('px','' )
    console.log(marioPosi);

     if (pipePosi <=  85 && pipePosi > 0 && marioPosi < 80 ){
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosi}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosi}px`;

        mario.src = 'imagem/EvQit5UXEAM7gAe.png'
        mario.style.width = "80px"

        clearInterval(loop);
    }

},10)
var btn = document.querySelector("#refresh");
btn.addEventListener("click", function() {
    
    location.reload();
});
document.addEventListener("keydown",jump);