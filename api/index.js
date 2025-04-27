const express = require("express");
const app = express();

const messages = [
  "¡Tú puedes con todo!",
  "Sigue adelante, lo mejor está por venir.",
  "Cree en ti y todo será posible.",
  "Cada día es una nueva oportunidad.",
  "El éxito es la suma de pequeños esfuerzos repetidos."
];

app.get("/api/motivational", (req, res) => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];
  res.json({ message });
});

module.exports = app;
