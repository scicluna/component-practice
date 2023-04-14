import express from 'express';
import { connectDatabase } from './connection/connection';
import cors from 'cors'
import { User } from './models/User';

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  allowedHeaders: ['Content-Type']
}))

connectDatabase();

app.get('/', (req, res) => {
  res.json('HELLO WORLD')
})

app.get('/users', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving users' })
  }
})

app.post('/users/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (!user) return res.status(400).json({ message: 'Incorrect username' })
    if (req.body.password !== user?.password) return res.status(400).json({ message: 'Incorrect password' })
    console.log("you are logged in")
    res.json({ message: 'login success' })
  } catch (err) {
    res.status(500).json({ message: 'Login Error' })
  }
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});