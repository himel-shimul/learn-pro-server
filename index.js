const express = require('express')
const app = express();
cors = require('cors');

app.use(cors());
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')
const courses = require('./data/courses.json')

app.get('/', (req, res) =>{
    res.send('api running')
})
app.get('/course-categories', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res)=>{
    const id = req.params.id;
    if(id === '50000'){
        res.send(courses);
    }
    else{
        const categoryCourse = courses.filter( c => c.category_id === id);
        res.send(categoryCourse);
    }
})
app.get('/courses', (req, res) =>{
    res.send(courses);
})
app.get('/courses/:id', (req, res) =>{
    const id = req.params.id;
    const singleCourse = courses.find( c => c._id === id)
    res.send(singleCourse)
});
app.listen(port, () => {
    console.log('server running on:', port);
})