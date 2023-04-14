import express, { Request, Response } from 'express';
import connectDatabase from './connection/connection';
import router from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connectDatabase();

app.use('/api', router)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});