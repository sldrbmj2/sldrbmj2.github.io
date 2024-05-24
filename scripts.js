document.getElementById('notifier').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Sabar ya ngab`);
    }
});
