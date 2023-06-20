import _ from 'lodash';
import './index.css';

const recentWrapper = document.getElementById('recent-wrapper');
const recentDiv = document.getElementById('recent');
const recentScore = document.getElementById('recent-score');

const list = [
  {
    name: 'Arnold',
    score: '101',
    index: 1,
  },
  {
    name: 'Timothy',
    score: '10',
    index: 2,
  },
  {
    name: 'Priya',
    score: '50',
    index: 3,
  },
  {
    name: 'Rey',
    score: '52',
    index: 4,
  },
];

const render = () => {
  const listWrapper = document.createElement('div');
  listWrapper.classList.add('list-wrap');
  list.map((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.id = item.index;
    listItem.innerText = `${item.name}: ${item.score}`;
    recentScore.appendChild(listItem);
    listWrapper.appendChild(recentScore);
    recentDiv.appendChild(listWrapper);
    return recentWrapper.appendChild(recentDiv);
  });
};

window.addEventListener('load', render);