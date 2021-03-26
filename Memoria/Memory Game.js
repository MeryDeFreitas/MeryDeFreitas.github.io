
//Cuando cargue la pagina va a poner a andar el temporizador
window.onload = updateClock;

var totalTime = 40;

function updateClock() {

document.getElementById('countdown').innerHTML = "Tienes " + totalTime + " segundos";

    if(totalTime==0){
      swal('Memory Game', '¡Lo siento, Se te acabó el tiempo!','error')
      .then(() => {
    document.location.reload();  //Va a reiniciar el juego
    }) }else{
        totalTime-=1;         //De lo contrario que ande el reloj y reste uno
        setTimeout("updateClock()",1000);
}
}

//Es disparado cuando el documento HTML ha sido completamente cargado y parseado, 
//sin esperar hojas de estilo, images y subframes para  finalizar la carga.

document.addEventListener('DOMContentLoaded', () => {

    //Se agregan dos veces para que cada carta tenga su propio ID asi sea la misma imagen
    const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
    ]

//Esto hace que las cartas se barajen cuando inicie el juego
cardArray.sort(() => 0.5 - Math.random())

//querySelector devuelve el primer elemento del documento que coincida con el grupo especificado

const grid = document.querySelector('.grid') 
const resultDisplay = document.querySelector('#result') 

var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//Crear el tablero
//Va a usar un ciclo para añadir la imagen de cada carta
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      //Aqui agrego la imagen usando un loop con el array
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      //A cada carta le daremos un ID que ira de 0 a 11
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      //Esto hace que aparezca en el HTML
      grid.appendChild(card)
    }
  }

//Revisar si coinciden

function checkForMatch(){
    
  var cards = document.querySelectorAll('img')
    
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  //Reviso si las cartas escogidas son iguales y tienen distintos Id's 

  if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] !== cardsChosenId[1]){
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
      }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      swal('Memory Game', 'Felicitaciones, ganaste el juego!','success')
          .then(() => {
      document.location.reload(); 
  })}
}

//Voltear carta
function flipCard() {
    //Este atributo lo creamos arriba
    var cardId = this.getAttribute('data-id')
    //Esto va a ir llenando el array cardsChosen
    cardsChosen.push(cardArray[cardId].name)
    //Esto va a ir llenando el array cardsChosenId
    cardsChosenId.push(cardId)
    //Guardara el atributo imagen dependiendo del ID
    this.setAttribute('src', cardArray[cardId].img)
    //Solo queremos que los matches se hagan entre 2 cartas, asi que lo definimos debajo
    if (cardsChosen.length ===2){
        //Colocamos con setTimeout para que no ocurra tan rapido todo, buscaremos si es match en 5 segundos 
        setTimeout (checkForMatch, 500)
    }
}

//Invocar Funcion
createBoard()

})