import { PokeList } from '../poke/interfaces/pokeList.interface';

export const pokeListMock: PokeList = {
  count: 1118,
  next: 'https://pokeapi.co/api/v2/pokemon/?offset=8&limit=8',
  previous: null,
  results: [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
    { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
    { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
    { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
    { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' },
    { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
    { name: 'wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/' },
  ],
};
