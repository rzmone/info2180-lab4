// app.js - Exercise 3

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const input = document.getElementById('search');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const query = input.value.trim();

        // Build URL
        const url = query === '' 
            ? 'superheroes.php'
            : `superheroes.php?query=${encodeURIComponent(query)}`;

        fetch(url)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data; // Show results in the page
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = '<p>Error with the request.</p>';
            });
    });
});
