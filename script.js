import pokemons from "./pokemons.js"
const pokemonContainer = document .getElementById("pokemonContainer")
const searchInput = document.getElementById("searchInput")
const filterType = document.getElementById("ilterType")
const sortBy = document.getElementById("sortBy")
const searchButton = document.getElementById("searchButton")


function generator(pokemon){
    pokemonContainer.innerHTML ="";
    pokemon.forEach(pokemon => {
        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML=`
        <h3>${pokemon.name}</h3>
       <img src="${pokemon.img}" alt="${pokemon.name}">
        <p>Type: ${pokemon.type}</p>
        <p>Weight: ${pokemon.weight}</p>
        `;
        pokemonContainer.appendChild(card);
    })

}

generator(pokemons)


searchButton.addEventListener("click",()=>{
    const searchPokemon=pokemons.find((item,index)=>{
        return item.name===searchInput.value
    })
    generator([searchPokemon])
})
