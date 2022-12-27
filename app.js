const express = require('express');
 

// express app
const app = express();

//register veiw engine
 app.set('view engine', 'ejs');
 app.set()

// listen for request
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'lorem ipsum one hunfgreea gvfjigo how to handle stuff withput being handled by Mark The greatest' },
        {title: 'Mario finds stars', snippet: 'lorem ipsum one hunfgreea gvfjigo how to handle stuff withput being handled by Mark The greatest'},
        {title: 'How to defeat Bowser', snippet: 'lorem ipsum one hunfgreea gvfjigo how to handle stuff withput being handled by Mark The greatest'}
    ]
    res.render('index', {title: 'Home', blogs});
})

app.get('/about', (req, res) => {
    res.render('about',{title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create-blog', {title: 'create a new Blog'});
});


app.use((req, res) =>{
    res.status('404').render('404', {title: '404'})
});