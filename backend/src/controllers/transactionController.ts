import { Request, Response } from "express";
import transactionModel from "../models/transactionModel";

class TransactionController {
  async getTransaction(req: Request, res: Response){
    const { id } = req.params;
    try{
      const transaction = await transactionModel.getTransaction(id);
      res.json(transaction);
    } catch(err) {
      console.log(err);
      res.status(500).json().send({error: 'Internal Server Error'});
    }
  }

  async getAllTransactions(res: Response){
    try{
      const transaction = await transactionModel.getAllTransactions();
      res.json(transaction);
    } catch(err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async addTransaction(req: Request, res: Response){
    const { client, description, transactionType, value } = req.body;
    try {
      await transactionModel.addTransaction(client,description,transactionType,value);
      res.json({ message: 'Transaction Added Successfully' });
    } catch(err){
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }

  async updateTransaction(req: Request, res: Response){
    const { id } = req.params;
    const { client, description, transactionType, value } = req.body;

    try {
      await transactionModel.updateTransaction(id, client, description, transactionType, value);
      res.json({ message: 'Transaction Updated Successfully' });
    } catch(err) {
      console.log(err)
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteTransaction(req: Request, res: Response){
    const { id } = req.params;
    try {
      await transactionModel.deleteTransaction(id);
      res.json({ message: 'Transaction Deleted Successfully' });
    } catch(err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}

export default new TransactionController();