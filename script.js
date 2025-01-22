
const pokedex = document.getElementById("pokedex")

const pokeButton = document.createElement("button")
pokeButton.innerText = "Get random Pokemon !"
pokeButton.classList.add("btn", "btn-success")

async function call() {

    let randomNumber = Math.floor(Math.random() * 1025) + 1
    
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    let data = await response.json()
    console.log(data)
    
    let pokeName = data.name
    let pokeFaceURL = data.sprites.front_default
    
    const pokemon = document.createElement("div")
    const pokeTitle = document.createElement("h1")
    const pokeCanva = document.createElement("img")
    
    pokeTitle.innerText = pokeName
    pokeCanva.setAttribute("src", pokeFaceURL)
    
    pokemon.append(pokeTitle, pokeCanva, pokeButton)
    pokedex.append(pokemon)
    
    pokemon.classList.add("pokemon")
}


call()


pokeButton.addEventListener('click', function () {
    document.querySelector(".pokemon").remove()
    call()
})