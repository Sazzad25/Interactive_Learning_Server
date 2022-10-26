const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const topics = require('./data/topics.json');


app.get('/', (req, res) => {
    res.send('Course API Running');
  });

  app.get('/topic-categories', (req, res) => {
    res.send(categories)
  });

  app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08'){
      res.send(topics);
    }
    else{
      const category_topics = topics.filter(n => n.category_id === id);
      res.send(category_topics);
    }
    
  })

  app.get('/topics/:id', (req, res) => {
    const id = req.params.id;
    const selectedTopics = news.find( n => n._id === id);
    res.send(selectedTopics);
  })

  app.listen(port, () => {
    console.log(`Topic Details server running ${port}`);
  })