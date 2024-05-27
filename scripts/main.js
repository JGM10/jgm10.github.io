$(".containerApps > div").click(function(){
    const id = $(this).attr("id");
    console.log(id)
    switch(id){
        case 'buscaminas': 
            $("#iframe-modal").attr("src","Demo/Buscaminas/buscaminas.html");
            break;
        case 'calculadora':
            $("#iframe-modal").attr("src", "Demo/Calculadora/calculadora.html");
            break;
        case 'parejas':
            $("#iframe-modal").attr("src", "Demo/Encuentra Pareja Fruta/encuentraParejaFruta.html");
            break;
        case 'snake': 
            $("#iframe-modal").attr("src", "Demo/Snake/snake.html");
            break;
        case 'tresenraya':
            $("#iframe-modal").attr("src", "Demo/Tres En Raya/tresEnRaya.html");
            break;
        case 'tetris':
            $("#iframe-modal").attr("src", "Demo/Tetris/tetris.html");
            break;
    }
    openModal();
});

$(".resume-icon > ul > li").click(function () {
    $(".resume-icon > ul > li").attr("class", "");
    $(this).attr("class", "active");
    $(".resume-content > div").attr("style","display: none")
    $("#" + $(this).attr("data")).attr("style", "");

});


const wrapper = document.querySelectorAll(".cardWrap");

wrapper.forEach(element => {    
    let state = {
        mouseX: 0,
        mouseY: 0,
        height: element.clientHeight,
        width: element.clientWidth
    };

    element.addEventListener("mousemove", component => {
        const card = element.querySelector(".card");
        const cardBg = card.querySelector(".cardBg");
        state.mouseX = component.pageX - element.offsetLeft - state.width / 2;
        state.mouseY = component.pageY - element.offsetTop - state.height / 2;

        const angleX = (state.mouseX / state.width) * 30;
        const angleY = (state.mouseY / state.height) * -30;
        card.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg) `;

        const posX = (state.mouseX / state.width) * -40;
        const posY = (state.mouseY / state.height) * -40;
        cardBg.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
    });

    element.addEventListener("mouseout", () => {
        const card = element.querySelector(".card");
        const cardBg = card.querySelector(".cardBg");
        card.style.transform = `rotateY(0deg) rotateX(0deg) `;
        cardBg.style.transform = `translateX(0px) translateY(0px)`;
    });
});
   
const modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];

function openModal () {
    modal.style.display = "block";
    document.body.classList.add('modal-open'); // Deshabilita el scroll
    $("#iframe-modal").focus();
}

span.onclick = function () {
    modal.style.display = "none";
    document.body.classList.remove('modal-open'); // Habilita el scroll
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove('modal-open'); // Habilita el scroll
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById("theme-toggle");
    const soundToggleButton = document.getElementById("sound-toggle");

    // Toggle dark/light mode
    themeToggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        const icon = themeToggleButton.querySelector("i");
        if (document.body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        } else {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    });

    // Toggle sound on/off
    soundToggleButton.addEventListener("click", function () {
        const icon = soundToggleButton.querySelector("i");
        if (icon.classList.contains("fa-volume-up")) {
            icon.classList.remove("fa-volume-up");
            icon.classList.add("fa-volume-mute");
            // Aquí puedes agregar la lógica para desactivar el sonido
        } else {
            icon.classList.remove("fa-volume-mute");
            icon.classList.add("fa-volume-up");
            // Aquí puedes agregar la lógica para activar el sonido
        }
    });
});
