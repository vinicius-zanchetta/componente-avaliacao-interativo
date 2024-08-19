document.getElementById('rating-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const selectedRating = document.querySelector('input[name="rating"]:checked');
    if (selectedRating) {
        const ratingValue = selectedRating.value;
        document.querySelector('.rate-card').style.display = 'none';
        document.querySelector('.thank-you-card span').textContent = `You selected ${ratingValue} out of 5`;
        document.querySelector('.thank-you-card').style.display = 'flex';
    }
});
