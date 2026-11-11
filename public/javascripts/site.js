let editBtn = document.getElementById('editBtn');
let editMessage = document.getElementById('editMessage');
editBtn.addEventListener('click', function() {
    let input = window.prompt('Change the task description:').trim();
    if (input === '' || input === null) { // The prompt returns null if nothing is entered, which is not the same as an empty string
        editMessage.innerText = 'No valid text was entered, task unchanged';
    } else {
        return input;
    }
});