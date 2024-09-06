const express = require('express');
const path = require('path');
const app = express();
const port = 9011;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Set the folder for your EJS files
app.set('views', __dirname + '/views');

// Static files like CSS, JS, images
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Profile route (to be protected later)
app.get('/profile', (req, res) => {
    // Mock or real user data (eventually, you’ll get this from FusionAuth)
    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        data: {
            userLocation: 'Seattle',
            preferredEvent: 'Casual',
            nickname: 'Johnny'
        }
    };

    // Render the profile.ejs template and pass the user data
    res.render('profile', { user: user });
});



// app.get('/profile', (req, res) => {
// r
//     const user = req.user; 

//     // Render the profile page and pass user data to the EJS template
//     res.render('profile', { user: user } );
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
