import express from 'express';
const app = express();
import cors from 'cors';
const port = 5000;
import path from 'path';
import dotenv from 'dotenv';
import fs from "fs";
import { fileURLToPath } from "url";
dotenv.config();
// Use mongoose to connect to MongoDB. Fall back to local MongoDB if URL not provided.
const mongoURL = process.env.URL;

const corsOptions = {
  origin: '*', // Adjust this to your frontend's origin
  methods: 'GET,POST,PUT,DELETE',
  optionsSuccessStatus: 200,
  credentials: true
};
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors(corsOptions));

const distPath = path.join(__dirname, "../dist");

if (!fs.existsSync(distPath)) {
  console.error("ERROR: dist folder not found at", distPath);
  process.exit(1);
}

app.use(express.static(distPath));

import mongoose from 'mongoose';
import Msg from './model/model.js';
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect mongoose to MongoDB (used by the Msg model)
mongoose.connect(mongoURL)
  .then(() => console.log('✅ Connected to MongoDB via mongoose'))
  .catch(err => console.error('❌ MongoDB connection error (mongoose):', err));

app.get( (req, res) => {
  const indexPath = path.join(distPath, "index.html");
  if (!fs.existsSync(indexPath)) {
    console.error("ERROR: index.html not found in dist folder");
    return res.status(500).send("index.html not found");
  }
  res.sendFile(indexPath);
});

app.get('/api/messages', async (req, res) => {
    try {
    const messages = await Msg.find();
    res.json(messages);
  } catch (error) {
    console.error("❌ Fetch error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.post('/api/messages', (req, res) => {
    console.log('POST /api/messages received, body:', req.body);
    const {name, message} = req.body || {};
    if (!name || !message) {
        console.warn('Validation failed: name or message missing');
        return res.status(422).json({ error: 'Name and message are required.' });
      }
      const newMsg = new Msg({ name, message });
      newMsg.save()
        .then(() => {
          console.log('Message saved to DB:', { name, message });
          return res.status(201).json({ message: 'Message saved!' });
        })
        .catch(err => {
          console.error('Error saving message to DB:', err);
          return res.status(500).json({ error: err.message || 'Error saving message.' });
        });
});

app.listen(port,"0.0.0.0", () => {
  console.log(`Server is running at http://localhost:${port}`);
});