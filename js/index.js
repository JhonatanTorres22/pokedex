import './charts.js'
import { setPokemon, setImage } from "./pokedex.js"
const $form = document.querySelector('#form')
const $next= document.querySelector('#next-pokemon')
const $prev = document.querySelector('#prev-pokemon')
const $nextImage= document.querySelector('#next-image')
const $prevImage = document.querySelector('#prev-image')
const $blue = document.querySelector("#circulo-grande");
const $idText = document.querySelector("#id");
const $pokedex = document.querySelector("#pokedex")


$form.addEventListener('submit', handleSubmit)
$next.addEventListener('click', handleNextPokemon)
$prev.addEventListener('click', handlePrevPokemon)
$nextImage.addEventListener('click', handleNextImage)
$prevImage.addEventListener('click', handlePrevImage)
$blue.addEventListener('click', randomPokemon)

let activePokemon = null

async function handleSubmit(event) {

        event.preventDefault()
        $pokedex.classList.add('is-open')
        const form = new FormData($form)
        const id = form.get('id')
        activePokemon = await setPokemon(id)
        
    }

    async function randomPokemon() {
        const id = Math.floor(Math.random() * 898) + 1;
        activePokemon = await setPokemon(id);
        setTimeout(() => {
            $idText.value = id }, 898);
    }

async function handleNextPokemon() {
    const id = (activePokemon === null || activePokemon.id === 898) ? 1 : activePokemon.id + 1
    activePokemon = await setPokemon(id)
    $idText.value = id;

}

async function handlePrevPokemon() { 

    const id = (activePokemon === null || activePokemon.id === 1) ? 898 : activePokemon.id - 1
    activePokemon = await setPokemon(id)
    $idText.value = id;
}

let activeSprite = 0 

function handleNextImage(){
    if (activePokemon === null) return false
    if (activeSprite >= activePokemon.sprites.length - 1){
        activeSprite = 0 
        return setImage(activePokemon.sprites[activeSprite])
    }
    activeSprite = activeSprite + 1
    return setImage(activePokemon.sprites[activeSprite])

}
function handlePrevImage(){
    if (activePokemon === null) return false

    if (activeSprite <= 0){
        activeSprite = activePokemon.sprites.length - 1
        return setImage(activePokemon.sprites[activeSprite])
    }
    activeSprite = activeSprite - 1
    return setImage(activePokemon.sprites[activeSprite])

}