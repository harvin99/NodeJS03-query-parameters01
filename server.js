// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();


//Template view engine
app.set('view engine', 'pug');
app.set('views', './views');
//For body parser
app.use(express.urlencoded({extended: true }));

//Router
const toDoList = [];
app.get("/", (req, res) => {
  res.render('index')
})
app.get("/todos", (req, res) => {
  const q = req.query.q;
  console.log(q);
  console.log(toDoList);
  if(!q)
    res.render('todo', {list: toDoList});
  else {
    const matchedTasks = toDoList.filter(task => task.toLowerCase().indexOf(q.toLowerCase()) !== 1);
    res.render('todo', {list: matchedTasks});
  } 
    
  
})
app.post("/todos", (req, res) => {
  toDoList.push(req.body.task);
  res.render('todo', {list: toDoList})
})
// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
