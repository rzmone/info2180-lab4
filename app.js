// app.js - Exercise 2

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('search-btn');

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        // AJAX call to superheroes.php using fetch()
        fetch('superheroes.php')
            .then(response => response.text())
            .then(data => {
                // Show the result in an alert box
                alert(data);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was a problem with the request.');
            });
    });
});
