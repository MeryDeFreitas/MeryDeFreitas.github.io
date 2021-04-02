let btn = document.getElementById('btn');
let output = document.getElementById('output');
let imagen = document.getElementById('Imagen');

let quotes = [
    '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill', 
    '“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers',
    '“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown',
    '“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi',
    '“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs',
    '“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen',
];

let numero = 0;

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
    quotes.splice(randomQuote, 1);
    numero++
    console.log(numero)
    nextImage();
    RefreshPage();
})

function nextImage(){
if (numero > 5){
    imagen.classList.add('Imagen6')
} else if (numero > 4){
    imagen.classList.add('Imagen5')
} else if (numero > 3){
    imagen.classList.add('Imagen4')
} else if (numero > 2){
    imagen.classList.add('Imagen3')
} else if (numero > 1){
    imagen.classList.add('Imagen2')
} else {
    imagen.classList.add('Imagen')
}}

function RefreshPage(){
    if(numero>6){
        document.location.reload();
    }
}