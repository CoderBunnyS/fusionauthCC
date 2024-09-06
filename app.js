document.getElementById('profile-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const nickname = document.getElementById('nickname').value;
    const favoriteSnack = document.getElementById('favorite-snack').value;
    const hobby = document.getElementById('hobby').value;

    // Here you would send the data to FusionAuth API
    console.log(`Nickname: ${nickname}, Favorite Snack: ${favoriteSnack}, Hobby: ${hobby}`);

    // Display a success message
    alert('Profile updated successfully!');
});
