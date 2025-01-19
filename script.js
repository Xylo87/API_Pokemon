pokedex = document.getElementById("pokedex")

async function call() {
    
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/3")
    const data = await response.json()
    console.log(data)

    let pokeName = data.name
    let pokeFaceURL = data.sprites.front_default
    
    pokemon = document.createElement("div")
    pokeCanva = document.createElement("img")
    pokeCanva.setAttribute("src", pokeFaceURL)
    
    pokemon.append(pokeName, pokeCanva)
    pokedex.append(pokemon)

    pokemon.classList.add("pokemon")
}

call()