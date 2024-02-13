import { APIGatewayProxyHandler } from 'aws-lambda';
import express, { Request, Response } from 'express';
import serverless from 'serverless-http';

const app = express();
app.get('/message', (req: Request, res: Response) => {
  res.send({ message: 'This is message route' });
});
app.use((req: Request, res: Response) => {
  res.send({ message: 'Server is running' });
});
export const hello: APIGatewayProxyHandler = serverless(app);
