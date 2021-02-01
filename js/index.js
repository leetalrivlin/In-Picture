'use strict';

var gQuests;
var gCurrQuestIdx = 0;
var gElVictoryMsg = document.querySelector('.victorious');
var gElRestart = document.querySelector('.restartBtn');

function init() {
  gQuests = createQuests();
  renderQuests();
}

function createQuests() {
  return [
    { id: 1, opts: ['cat', 'dog', 'owl'], correctOptIndex: 1 },
    { id: 2, opts: ['pig', 'penguin', 'cat'], correctOptIndex: 2 },
    { id: 3, opts: ['horse', 'dog', 'pig'], correctOptIndex: 0 },
  ];
}

function renderQuests() {
  var strHTML = '';
  strHTML += `<img src="images/${gCurrQuestIdx + 1}.jpg">`;
  for (var j = 0; j < gQuests[gCurrQuestIdx].opts.length; j++) {
    strHTML += `<button class="btn" onclick="checkAnswer(${gCurrQuestIdx}, this)">${gQuests[gCurrQuestIdx].opts[j]}</button>`;
  }
  var elBox = document.querySelector('.box');
  elBox.innerHTML = strHTML;
}

function checkAnswer(optIdx, elBtn) {
  var options = gQuests[optIdx].opts;
  var correctOption = gQuests[optIdx].correctOptIndex;
  if (elBtn.innerText === options[correctOption]) {
    if ( gCurrQuestIdx === gQuests.length -1) {
      gElVictoryMsg.style.visibility = 'visible';
    } else {
      gCurrQuestIdx++;
    }
  }
  renderQuests();
}

function restart() {
    gElVictoryMsg.style.visibility = 'hidden';
    gCurrQuestIdx = 0;
    renderQuests();
 }