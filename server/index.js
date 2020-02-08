var app = require("express")();
var server = require("http").createServer(app);
var bodyParser = require("body-parser");
app.use(bodyParser.json());

let tasks = [];

tasks.push(
  {
    id: 1,
    description: "example task 1",
    done: false
  },
  {
    id: 2,
    description: "example task 2",
    done: false
  }
);

app.get("/tasks", function(req, res) {
  res.send(tasks);
});

app.get("/tasks/:id", function(req, res) {
  res.send(tasks.find(task => task.id === parseInt(req.params.id)));
});

app.delete("/tasks/:id", function(req, res) {
  const removedIndex = tasks.findIndex(
    task => task.id === parseInt(req.params.id)
  );
  tasks.splice(removedIndex, 1);
  res.send().status(200);
});

app.post("/tasks", function(req, res) {
  tasks.push({
    id: req.body.id,
    description: req.body.description,
    done: req.body.done
  });
  res.send().status(200);
});

app.put("/tasks/:id", function(req, res) {
  const editedTask = tasks.find(task => task.id === parseInt(req.params.id));
  editedTask.done = !editedTask.done;
  res.send().status(200);
});

server.listen(3001, () => {
  console.log("Listening on port 3001");
});
