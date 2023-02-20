
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.home.front_default
    
    const abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name)
    const[ability] = abilities
    pokemon.abilities = abilities
    pokemon.ability = ability

    pokemon.height = pokeDetail.height
    pokemon.weight = pokeDetail.weight

    pokemon.hp = pokeDetail.stats[0].base_stat
    pokemon.atk = pokeDetail.stats[1].base_stat
    pokemon.def = pokeDetail.stats[2].base_stat
    pokemon.satk = pokeDetail.stats[3].base_stat
    pokemon.sdef = pokeDetail.stats[4].base_stat
    pokemon.spd = pokeDetail.stats[5].base_stat
   
    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => { 
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset, limit)=> {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequest) => Promise.all(detailRequest))
    .then((pokemonDetails) => pokemonDetails)
}

