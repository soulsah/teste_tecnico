import { Router } from 'express';
import transactionController from '../controllers/transactionController';

const transactionRouter = Router();

transactionRouter.get('/', transactionController.getAllTransactions);
transactionRouter.get('/:id', transactionController.getTransaction);
transactionRouter.post('/', transactionController.addTransaction);
transactionRouter.put('/:id', transactionController.updateTransaction);
transactionRouter.delete('/:id', transactionController.deleteTransaction);

export default transactionRouter;