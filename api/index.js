const express = require("express");
const { ttdl, ytmp3, ytmp4, igdl, fbdl, ytsearch } = require("ruhend-scraper");

const app = express();
app.use(express.json());

app.get("/api/tiktok", async (req, res) => {
  try {
    const { url } = req.query;
    const data = await ttdl(url);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "TikTok error", details: err.message });
  }
});

app.get("/api/ytmp3", async (req, res) => {
  try {
    const { url } = req.query;
    const data = await ytmp3(url);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "YTMP3 error", details: err.message });
  }
});

app.get("/api/ytmp4", async (req, res) => {
  try {
    const { url } = req.query;
    const data = await ytmp4(url);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "YTMP4 error", details: err.message });
  }
});

app.get("/api/instagram", async (req, res) => {
  try {
    const { url } = req.query;
    const result = await igdl(url);
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: "Instagram error", details: err.message });
  }
});

app.get("/api/facebook", async (req, res) => {
  try {
    const { url } = req.query;
    const result = await fbdl(url);
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: "Facebook error", details: err.message });
  }
});

app.get("/api/ytsearch", async (req, res) => {
  try {
    const { query } = req.query;
    const data = await ytsearch(query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "YouTube Search error", details: err.message });
  }
});

module.exports = app;
