import { Router } from 'express';
import transactionController from '../controllers/transactionController';

const router = Router();

router.get('/transactions', transactionController.getAllTransactions);
router.get('/transactions/:id', transactionController.getTransaction);
router.post('/transactions', transactionController.addTransaction);
router.put('/transactions/:id', transactionController.updateTransaction);
router.delete('/transactions/:id', transactionController.deleteTransaction);

export default router;