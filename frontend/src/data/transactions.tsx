export async function getTransactions() {
  try {
    const response = await fetch('http://localhost:2077/');
    
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