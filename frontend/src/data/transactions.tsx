export async function getTransactions() {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return [
    { id: 123, client: 'Matheus', description: 'Computador', transactionType: 'Crédito', value: 5000, date: '2023-05-12' },
    { id: 123431, client: 'Ana', description: 'Smartphone', transactionType: 'Débito', value: 1200, date: '2023-04-08' },
    { id: 124231, client: 'Carlos', description: 'Câmera', transactionType: 'Crédito', value: 3000, date: '2023-03-20' },
    { id: 23454356, client: 'Julia', description: 'Fones de ouvido', transactionType: 'Débito', value: 150, date: '2023-06-15' },
    { id: 4324, client: 'Lucas', description: 'Tablet', transactionType: 'Crédito', value: 2000, date: '2023-02-10' },
    { id: 34554367, client: 'Amanda', description: 'Impressora', transactionType: 'Débito', value: 800, date: '2023-07-05' },
    { id: 89543012, client: 'Pedro', description: 'Teclado mecânico', transactionType: 'Crédito', value: 120, date: '2023-01-28' },
    { id: 4564178, client: 'Maria', description: 'Mouse sem fio', transactionType: 'Débito', value: 50, date: '2023-08-18' },
    { id: 1243345, client: 'Rafael', description: 'Monitor', transactionType: 'Crédito', value: 1000, date: '2023-09-22' },
    { id: 5675489, client: 'Fernanda', description: 'HD externo', transactionType: 'Débito', value: 200, date: '2023-11-11' },
    { id: 6783490, client: 'Gabriel', description: 'Notebook', transactionType: 'Crédito', value: 2500, date: '2023-10-03' },
    { id: 3455467, client: 'Isabela', description: 'Webcam', transactionType: 'Débito', value: 80, date: '2023-12-05' },
    { id: 9012323, client: 'Thiago', description: 'Ssd', transactionType: 'Crédito', value: 300, date: '2023-02-14' },
    { id: 23442356, client: 'Larissa', description: 'Caixa de som', transactionType: 'Débito', value: 70, date: '2023-06-30' },
    { id: 56745489, client: 'Felipe', description: 'Gravador de DVD', transactionType: 'Crédito', value: 120, date: '2023-04-17' },
    { id: 7854901, client: 'Raquel', description: 'Roteador', transactionType: 'Débito', value: 90, date: '2023-09-08' },
    { id: 12323445, client: 'Eduardo', description: 'Cadeira gamer', transactionType: 'Crédito', value: 500, date: '2023-07-20' },
    { id: 8903412, client: 'Vanessa', description: 'Laptop', transactionType: 'Débito', value: 1800, date: '2023-01-15' },
    { id: 45623478, client: 'Renato', description: 'Teclado sem fio', transactionType: 'Crédito', value: 80, date: '2023-08-28' },
    { id: 9014323, client: 'Camila', description: 'Placa de vídeo', transactionType: 'Débito', value: 400, date: '2023-11-30' }
  ];
}