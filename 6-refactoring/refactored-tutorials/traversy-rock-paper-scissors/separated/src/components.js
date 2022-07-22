// refactored from showWinner

export const renderModalBody = (winner = '', computerChoice = '') => {
  let renderedHTML = '';

  // append the winner header
  if (winner === 'player') {
    renderedHTML += '<h1 class="text-win">You Win</h1>';
  } else if (winner === 'computer') {
    renderedHTML += '<h1 class="text-lose">You Lose</h1>';
  } else {
    renderedHTML += "<h1>It's A Draw</h1>";
  }

  // append the computer's choice
  renderedHTML += `
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }</strong></p>`;

  return renderedHTML;
};

export const renderScore = (playerScore = 0, computerScore = 0) => {
  return `
    <p>Player: ${playerScore}</p>
    <p>Computer: ${computerScore}</p>
    `;
};
