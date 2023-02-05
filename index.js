const page = document.getElementById('root')
const tamagochi = document.getElementById('tamagochi')
const barraSueño = document.getElementById('relleno--sueño')
const barraHambre = document.getElementById('relleno--hambre')
const alimentar = document.getElementById('alimentar')
const dormir = document.getElementById('dormir')


//ESTADOS DEL TAMAGOCHI
const happy = document.createTextNode('todo bien')
const hungry = document.createTextNode('hambre')
const sleppy = document.createTextNode('sueño')

//VARIABLES QUE SE INICIALIZAN AL MOMENTO DE INCIAR LA APP
const initialTime = new Date
let hambre = 100;
let sueño = 100;

//VARIABLE AUXILIAR

const pantalla = document.createElement('p')
tamagochi.appendChild(pantalla)

pantalla.innerHTML = 'happy'

var sueñoValue = 100
var hambreValue = 100

alimentar.addEventListener('click', () => {
    hambreValue = 100
})

dormir.addEventListener('click', () => {
    sueñoValue = 100
})

const setFace = () => {
    if (hambreValue < 30 && sueñoValue < 30) {
        pantalla.innerHTML = 'Hambre y Sueño'
    } else if (hambreValue < 30) {
        pantalla.innerHTML = 'Alimentame plis'
    } else if (sueñoValue < 30) {
        pantalla.innerHTML = 'Quisera Dormirr'
    } else {
        pantalla.innerHTML = 'Estoy perfecto'
    }
}

const tamagochiWorks = () => {

    barraSueño.style.width = `${sueñoValue}%`

    barraHambre.style.width = `${hambreValue}%`

    let auxTime = new Date;
    if (sueñoValue === 0) {
        return false
    }
    if (hambreValue === 0) {
        return false
    }
    if ((auxTime - initialTime) > 1000) {
        hambreValue--
        console.log(hambreValue)
    }
    if ((auxTime - initialTime) > 1000) {
        sueñoValue--
        console.log(sueñoValue)
    }

    setFace()

}

setInterval(tamagochiWorks, 500);