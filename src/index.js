import { fetchMovies, callTheAPI } from './movies';
import { initSortable } from './plugins/init_sortable';

// No arquivo de entrada (entry file), a gente faz apenas esses 3 comportamentos

// Seleciona elementos
const form = document.querySelector('#search-form');

// Adiciona event listeners
form.addEventListener('submit', callTheAPI);

// Chama funções que a gente precisa que rodem na primeira vez que a página carrega;
fetchMovies('mad max'); // on 1st page load
initSortable();