import express from 'express';
import { connectDatabase } from './connection/connection';
import cors from 'cors'
import { router } from './routes/users';

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

app.use('/users', router)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});