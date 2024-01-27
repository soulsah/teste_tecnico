import pool from "../config/dbConnect";

class TransactionModel {
  async getTransaction(id: string) {
    const [rows] = await pool.execute('SELECT * FROM transactions where id = ?', [id]);
    return rows;
  }

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

  async updateTransaction(id: string, client:string, description: string, transactionType: string, value: number){
    const date = new Date();

    await pool.execute(
      'UPDATE transactions SET client = ?, description = ?, transactionType = ?, value = ?, date = ? WHERE id = ?',
      [client, description,transactionType,value,date,id]
    );
  }

  async deleteTransaction(id: string){
    await pool.execute('DELETE FROM transactions WHERE id = ?', [id]);
  }
}

export default new TransactionModel();