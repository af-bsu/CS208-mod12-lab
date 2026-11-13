const forms = document.querySelectorAll('.editForm');
forms.forEach(function(form) {
    form.addEventListener('submit', function(event) {
        const li = form.closest('.task'); // I didn't even know this existed until I did digging in the MDN docs
        const message = li.querySelector('.editMessage');
        const input = window.prompt('Change the task description:');

        // The prompt will return null on cancel or no input
        if (input === null || input.trim() === '') {
            message.textContent = 'No valid text was entered, task unchanged';
            event.preventDefault();
            return;
        }

        form.querySelector('.editInput').value = input.trim();
    });
});