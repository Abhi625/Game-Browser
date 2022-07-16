const gameSearchBox = document.getElementById('game-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');


async function loadGame(searchTerm){
    const URL = `https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    const result= data.filter((s)=>s.title==searchTerm);
    console.log(result);
}

function findGame(){
    let searchTerm = (gameSearchBox.value).trim();
    if(searchTerm.length > 0){
        searchList.classList.remove('hide-search-list');
        loadGame(searchTerm);
    } else {
        searchList.classList.add('hide-search-list');
    }
}

