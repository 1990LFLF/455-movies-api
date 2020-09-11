// 1. importar o plugin
import Sortable from 'sortablejs';

// 2. criar uma função
const initSortable = () => {
  const list = document.querySelector('#results');
  const options = {
    ghostClass: "ghost",
    animation: 150,
    onEnd: (event) => {
      alert(`${event.oldIndex} moved to ${event.newIndex}`);
    }
  };
  Sortable.create(list, options);
}

// 3. exportar a função
export { initSortable };