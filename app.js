'use strict';

const container = document.querySelector('.container');
const cards = 200;

const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};

function init() {
  for (let i = 1; i <= cards; i++) {
    fetchData(i);
  }
}

init();

async function fetchData(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();

  createCards(data);
}

function createCards(data) {
  const div = document.createElement('div');
  div.classList.add('pokemon');

  const innerEl = `
			<img src="https://pokeres.bastionbot.org/images/pokemon/${
        data.id
      }.png" alt="pokemon" />
				<div class="info">
					<p>Id: #${data.id.toString().padStart(3, '0')}</p>
					<p>Name: ${data.name}</p>
					<p>Power: ${data.types[0].type.name}</p>
			</div>
	`;

  div.innerHTML = innerEl;

  container.appendChild(div);
  console.log(data);
}
