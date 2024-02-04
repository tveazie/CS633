var selectedAnswers = [];

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.textContent);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggableElement = document.createElement("div");
    draggableElement.textContent = data;
    draggableElement.className = "draggable";

    const draggableList = document.getElementById("answer-container");
    const draggedItem = document.querySelector('.draggable[data-answer="' + data + '"]');

    if (draggedItem) {
        draggableList.removeChild(draggedItem);
    }

    document.getElementById("droppable-area").appendChild(draggableElement);

    selectedAnswers.push(data);
}

function checkAnswerAndProceed(nextPage, correctAnswers) {
    const isCorrect = arraysEqual(selectedAnswers, correctAnswers);

    if (isCorrect) {
        userScore++;
    }


    function arraysEqual(arr1, arr2) {
        return JSON.stringify(arr1) === JSON.stringify(arr2);
    }

    var userScore = 0;
}
function goToNextPage(nextPage) {
    window.location.href = nextPage;
}
