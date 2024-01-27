import pool from "../config/dbConnect";

class TransactionModel {
  async getAllTransactions() {
    const [rows] = await pool.execute('SELECT * FROM transactions');
    return rows;
  };

  async addTransaction(client: string, description: string, transactionType: string, value: number) {
    const date = new Date();

    await pool.execute(
      'INSERT INTO transactions (client, description, transactionType, value, date) values (?,?,?,?,?)',
      [client, description, transactionType, value, date] 
    );
  }
}

export default new TransactionModel();