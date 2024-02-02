import { CreateTransactionSchema } from '../components/create-transaction-dialog';

export async function getTransactions() {
  try {
    const response = await fetch('http://localhost:9999/');
    
    if (!response.ok) {
      throw new Error(`Erro ao obter as transações. Status: ${response.status}`);
    }

    const transactions = await response.json();
    return transactions;
  } catch (error) {
    console.error('Erro na solicitação de transações:', error);
    throw error;
  }
}

export async function addTransaction(data: CreateTransactionSchema){
  try{
    const response = await fetch('http://localhost:9999/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(data),
      });
  } catch (err){
    console.log(err)
  };
}