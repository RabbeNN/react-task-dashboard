const express = require("express");
const router = express.Router();

let tasks = [
  { id: 1, title: "Första task", status: "pågående" },
  { id: 2, title: "Andra task", status: "klar" },
];

router.get("/", (req, res) => res.json(tasks));

router.post("/", (req, res) => {
  const newTask = { id: Date.now(), ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.delete("/:id", (req, res) => {
  tasks = tasks.filter((t) => t.id !== Number(req.params.id));
  res.status(204).end();
});

module.exports = router;
