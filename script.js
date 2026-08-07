// ===============================
// TEXTO DO HERO
// ===============================

const nome = "Albert Magalhães";
const cargo = "Desenvolvedor | Ciência da Computação";

let i = 0;
let j = 0;


function digitarNome(){

    const elementoNome = document.getElementById("nome");

    if(!elementoNome) return;


    if(i < nome.length){

        elementoNome.innerHTML += nome.charAt(i);

        i++;

        setTimeout(digitarNome,100);

    }else{

        digitarCargo();

    }

}



function digitarCargo(){

    const elementoCargo = document.getElementById("cargo");

    if(!elementoCargo) return;


    if(j < cargo.length){

        elementoCargo.innerHTML += cargo.charAt(j);

        j++;

        setTimeout(digitarCargo,80);

    }

}



// inicia animação
digitarNome();




// ===============================
// DOWNLOAD CURRÍCULO PDF
// ===============================

function baixarCurriculo(){

    window.open(
        "./arquivos/Curriculo_Albert_Magalhaes.pdf",
        "_blank"
    );

}





// ===============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===============================


function reveal(){

    const elementos = document.querySelectorAll(".reveal");


    elementos.forEach(elemento=>{


        const alturaTela = window.innerHeight;

        const topoElemento =
        elemento.getBoundingClientRect().top;


        if(topoElemento < alturaTela - 120){

            elemento.classList.add("active");

        }


    });


}



window.addEventListener("scroll", reveal);



// executa quando abre a página
window.addEventListener("load", reveal);






// ===============================
// CURSOR PERSONALIZADO
// ===============================


const cursor = document.querySelector(".cursor");


document.addEventListener("mousemove",(e)=>{


    if(cursor){

        cursor.style.left =
        e.clientX + "px";


        cursor.style.top =
        e.clientY + "px";

    }


});






// ===============================
// PARTICLES BACKGROUND
// ===============================


document.addEventListener("DOMContentLoaded",()=>{


if(typeof particlesJS === "function"){


particlesJS("particles-js",{


particles:{


number:{
    value:80
},


color:{
    value:"#00ffff"
},


shape:{
    type:"circle"
},


opacity:{
    value:0.5
},


size:{
    value:3
},


line_linked:{

    enable:true,

    distance:150,

    color:"#00ffff",

    opacity:0.4

},


move:{

    enable:true,

    speed:2

}



},



interactivity:{


events:{


onhover:{

    enable:true,

    mode:"grab"

},


onclick:{

    enable:true,

    mode:"push"

}



}



}



});



}



});