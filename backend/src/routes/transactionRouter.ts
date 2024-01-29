import { Router, Request, Response, NextFunction } from 'express';
import transactionController from '../controllers/transactionController';

const transactionRouter = Router();

const configureHeaders = (req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
};

transactionRouter.use(configureHeaders);

transactionRouter.get('/', transactionController.getAllTransactions);
transactionRouter.get('/:id', transactionController.getTransaction);
transactionRouter.post('/', transactionController.addTransaction);
transactionRouter.put('/:id', transactionController.updateTransaction);
transactionRouter.delete('/:id', transactionController.deleteTransaction);

export default transactionRouter;
