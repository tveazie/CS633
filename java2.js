document.addEventListener("DOMContentLoaded", function() {
    const dropZone = document.getElementById('dropZone');

    dropZone.addEventListener('dragover', dragOver);
    dropZone.addEventListener('dragenter', dragEnter);
    dropZone.addEventListener('dragleave', dragLeave);
    dropZone.addEventListener('drop', drop);

    const draggableElements = document.querySelectorAll('.option');
    draggableElements.forEach(element => {
        element.addEventListener('dragstart', dragStart);
    });

    function dragStart(event) {
        const optionId = event.target.id;
        event.dataTransfer.setData('text/plain', optionId);
    }
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
        this.classList.remove('hovered');
        console.log('dragLeave');
    }

    function drop(e) {
        e.preventDefault();
        const optionId = e.dataTransfer.getData('text/plain');
        console.log('Dropped option ID:', optionId);
        const option = document.getElementById(optionId);
        console.log('Dropped option:', option);
        if (option) {
            const optionText = document.getElementById(optionId).textContent.trim();
            console.log('Option text:', optionText); 
            this.appendChild(option);
            this.classList.remove('hovered');
        } else {
            console.error('Failed to find the dragged option element.');
        }
    }

    document.getElementById('submitBtn').addEventListener('click', evaluateAnswers);
    document.getElementById('restartBtn').addEventListener('click', restartQuiz);

    const answers = {};
    const dropZones = document.querySelectorAll('.drop-zone');
    dropZones.forEach(dropZone => {
        const question = dropZone.getAttribute('id');
        answers[question] = ['Clear Case', 'Github']; 
    });

    function evaluateAnswers() {
        let totalCorrectAnswers = 0;
        let totalSelections = 0;
        let totalPossibleAnswers = 0;

        Object.keys(answers).forEach(question => {
            const correctOptions = answers[question].map(option => option.toLowerCase().trim());
            const dropZone = document.getElementById(question);

            totalPossibleAnswers += correctOptions.length;

            if (dropZone && dropZone.children.length > 0) {
                const selectedOptions = Array.from(dropZone.children).map(option => option.textContent.toLowerCase().trim());
                totalSelections += selectedOptions.length;

                correctOptions.forEach(correctOption => {
                    if (selectedOptions.includes(correctOption)) {
                        totalCorrectAnswers++;
                    }
                });
            }
        });

        const scoreMessage = totalSelections > 0 ? `You put ${totalSelections} in the drop box. You got ${totalCorrectAnswers} out of ${totalPossibleAnswers} correct.` : 'You did not make any selections.';
        const percentage = (totalCorrectAnswers / totalPossibleAnswers) * 100;

        alert(`${scoreMessage} Your score is ${percentage.toFixed(2)}%.`);
        console.log(`${scoreMessage} Your score is ${percentage.toFixed(2)}%.`);
    }
    
    function restartQuiz() {
        location.reload();
    }
});
