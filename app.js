const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const Blog = require('./models/blog');
const { render } = require('ejs');


// express app
const app = express();


// Connect to mongodb
const dbURI = 'mongodb+srv://node-tuts:node-tuts1234@nodetuts.l2plxbr.mongodb.net/nodetuts?retryWrites=true&w=majority'
mongoose.set({strictQuery: true})
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

//register veiw engine
app.set('view engine', 'ejs');


// My Middleware
// app.use((req, res, next) => {
//     console.log('New request made');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// })

// app.use((req, res, next) => {
//     console.log('In The Next Middleware');
//     next();
// })

// My Middleware using morgan
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res)=> {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about my blog'
    });
    blog.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })
});

app.get('/all-blogs', (req, res)=> {
    Blog.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
});

app.get('/single-blog', (req, res)=> {
    Blog.findById('63b44c62f14310016835c959')
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
})

// Express middleware
app.use(express.static('public'));
app.use(express.urlencoded ({ extended: true}));

// Routing
app.get('/', (req, res) => {
    res.redirect('/blogs')
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// blogs
app.get('/blogs', (req, res) => {
    Blog.find().sort ({createdAt: -1})
    .then((result) => {
        res.render('index', {title: 'All Blogs', blogs: result})
    })
    .catch((err)=> {
        console.log(err);
    })
})

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
    .then((result)=>{
        res.redirect('/')
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get('/blogs/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id); 
    Blog.findById(id)
    .then(result => {
        res.render('details', {blog: result, title: 'blog details'});
    }) 
    .catch(err=> {
        console.log(err);
    })
})
app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;  

    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({ redirect: '/blogs'});
    })
    .catch(err => {
        console.log(err);
    })
})
app.get('/blogs/create', (req, res) => {
    res.render('create-blog', { title: 'create a new Blog' });
});


app.use((req, res) => {
    res.status('404').render('404', { title: '404' })
});