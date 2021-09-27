//data
var currentDate  = new Date(),
currentDay   = currentDate.getDate() < 10 
             ? '0' + currentDate.getDate() 
             : currentDate.getDate(),
currentMonth = currentDate.getMonth() < 9 
             ? '0' + (currentDate.getMonth() + 1) 
             : (currentDate.getMonth() + 1);

document.getElementById("date").innerHTML = currentDay + '/' + currentMonth + '/' +  currentDate.getFullYear();



//Funçao dos incones
function minions() {

  var imgMinion = document.getElementById("imgMinion");

  imgMinion.style.display = "block";

  var imgGru = document.getElementById('imgGru');
  imgGru.style.display = "none";

  var imgMargo = document.getElementById('imgMargo');
  imgMargo.style.display = "none";

  var imgEdith = document.getElementById('imgEdith');
  imgEdith.style.display = "none";

  var imgAgnes = document.getElementById('imgAgnes');
  imgAgnes.style.display = "none";


}

function gru() {

  var imgGru = document.getElementById("imgGru");

  imgGru.style.display = "block";

  var imgMinion = document.getElementById('imgMinion');
  imgMinion.style.display = "none";

  var imgMargo = document.getElementById('imgMargo');
  imgMargo.style.display = "none";

  var imgEdith = document.getElementById('imgEdith');
  imgEdith.style.display = "none";

  var imgAgnes = document.getElementById('imgAgnes');
  imgAgnes.style.display = "none";

}

function margo() {

  var imgMargo = document.getElementById("imgMargo");

  imgMargo.style.display = "block";

  var imgMinion = document.getElementById('imgMinion');
  imgMinion.style.display = "none";

  var imgGru = document.getElementById('imgGru');
  imgGru.style.display = "none";

  var imgEdith = document.getElementById('imgEdith');
  imgEdith.style.display = "none";

  var imgAgnes = document.getElementById('imgAgnes');
  imgAgnes.style.display = "none";

}

function edith() {

  var imgEdith = document.getElementById("imgEdith");

  imgEdith.style.display = "block";

  var imgMinion = document.getElementById('imgMinion');
  imgMinion.style.display = "none";

  var imgGru = document.getElementById('imgGru');
  imgGru.style.display = "none";

  var imgEdith = document.getElementById('imgMargo');
  imgEdith.style.display = "none";

  var imgAgnes = document.getElementById('imgAgnes');
  imgAgnes.style.display = "none";

}

function agnes() {

  var imgAgnes = document.getElementById("imgAgnes");

  imgAgnes.style.display = "block";

  var imgMinion = document.getElementById('imgMinion');
  imgMinion.style.display = "none";

  var imgGru = document.getElementById('imgGru');
  imgGru.style.display = "none";

  var imgEdith = document.getElementById('imgMargo');
  imgEdith.style.display = "none";

  var imgAgnes = document.getElementById('imgEdith');
  imgAgnes.style.display = "none";
}




//Mudar foto


const elementoImgMinion = document.querySelector('#imgminion')
const elementoImgGru = document.querySelector('#imggru')
const elementoImgMargo = document.querySelector('#imgmargo')
const elementoImgEdith = document.querySelector('#imgedith')
const elementoImgAgnes = document.querySelector('#imgagnes')

const elementoSituacao = document.querySelector('#situacao')
const elementoFrases = document.querySelector('#frases')



let elementoBtn = document.querySelector('#alterar')


window.onload = function() {

};


elementoBtn.addEventListener('click', function ( ){

  if(elementoBtn.value == 'primeiro'){
    elementoImgMinion.src = './assets/img/minionF.png';
    elementoImgGru.src = './assets/img/GruFeliz3.png';
    elementoImgMargo.src = './assets/img/MargoFeliz.png';
    elementoImgEdith.src = './assets/img/EdithFeliz.png';
    elementoImgAgnes.src = './assets/img/AgnesFeliz.png';

    elementoSituacao.innerText = 'Feliz';
    elementoFrases.innerText = 'Não importa o que você decidiu. O que importa é que isso te faça feliz!';
    elementoBtn.value = 'segundo' ;
   
} else if(elementoBtn.value == 'segundo') { 
    elementoImgMinion.src = './assets/img/Wolverine.png';
    elementoImgGru.src = './assets/img/Gru3.png';
    elementoImgMargo.src = './assets/img/MargoIrritada.png';
    elementoImgEdith.src = './assets/img/Edith_irritada.png';
    elementoImgAgnes.src = './assets/img/AgnesEmburrada.png';
    

    elementoSituacao.innerText = 'Saí da frete, tô virado(a) na moléstia.' ;
    elementoFrases.innerText = 'Evite sentimentos corrosivos como o rancor, a raiva e as mágoas, que nos tiram noites de sono e em nada afetam as pessoas responsáveis por causá-los.'
   
    elementoBtn.value = 'terceiro' ;

}else if(elementoBtn.value == 'terceiro') { 
    elementoImgMinion.src='./assets/img/minion_indiferente2.png';
    elementoImgGru.src='./assets/img/gruIndiferente.png';
    elementoImgMargo.src='./assets/img/MargoIndifente.png';
    elementoImgEdith.src='./assets/img/EdithInsatisfeita.png';
    elementoImgAgnes.src='./assets/img/Agnes_tedio.png';
 
    elementoSituacao.innerText = 'Tô nem aí!' ;
    elementoFrases.innerText = 'A indiferença é o sono da alma.';
  
    elementoBtn.value = 'quarto';
    

} else{ 
    elementoImgMinion.src = './assets/img/MinionTedio.png' ;
    elementoImgGru.src = './assets/img/Gru_triste.png';
    elementoImgMargo.src = './assets/img/MargoTriste2.png';
    elementoImgEdith.src ='./assets/img/Edith_estressada.png';
    elementoImgAgnes.src ='./assets/img/AgnesTriste.png';

    elementoSituacao.innerText='Triste.';
    elementoFrases.innerText='Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.';
    elementoBtn.value = 'primeiro';
    
}

})



