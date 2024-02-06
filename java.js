const dropZone = document.getElementById('dropZone');

dropZone.addEventListener('dragover', dragOver);
dropZone.addEventListener('dragenter', dragEnter);
dropZone.addEventListener('dragleave', dragLeave);
dropZone.addEventListener('drop', drop);

function dragOver(e) {
  e.preventDefault();
  console.log('dragOver');
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
  console.log('dragEnter');
}

function dragLeave() {
  console.log('dragLeave');
}

function drop(e) {
  e.preventDefault();
  const optionId = e.dataTransfer.getData('text/plain');
  console.log('Dropped option ID:', optionId);
  const option = document.getElementById(optionId);
  console.log('Dropped option:', option);
  this.appendChild(option);
  this.classList.remove('hovered');
  console.log('drop');
}

function evaluateAnswers() {
  let correctAnswers = 0;
  const answers = {
    "What is doc control?": ['Documentum', 'Collabnet Teamforge', 'AccuRev'],
  };


  Object.keys(answers).forEach(question => {
    const dropZone = document.getElementById(question);
    const optionId = dropZone.children[0].id;
    const optionText = document.getElementById(optionId).textContent;

    if (answers[question].includes(optionText)) {
      correctAnswers++;
    }
  });


  const totalQuestions = Object.keys(answers).length;
  alert(`You got ${correctAnswers} out of ${totalQuestions} correct.`);
  console.log(`You got ${correctAnswers} out of ${totalQuestions} correct.`);
}
