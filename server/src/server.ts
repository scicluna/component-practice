import express, { Request, Response } from 'express';
import connectDatabase from './connection/connection';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connectDatabase();

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello from Express with TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});