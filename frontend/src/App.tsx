import { Button } from "./components/ui/button"
import { PlusCircle } from "lucide-react"
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from "./components/ui/table"
import { Dialog, DialogTrigger } from "./components/ui/dialog"
import { TransactionFilters } from "./components/transaction-filters"
import { CreateTransactionDialog } from "./components/create-transaction-dialog"
import { useQuery } from '@tanstack/react-query'
import { getTransactions } from "./data/transactions"

export function App() {
  const {data: transactions} = useQuery({
    queryKey: ['transactions'],
    queryFn: getTransactions
  })

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Transações</h1>
      <div className="flex items-center justify-between">
        <TransactionFilters/>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              Nova Transação
              <PlusCircle className="w-3 h-3 ml-2"/>
            </Button>
          </DialogTrigger>

          <CreateTransactionDialog/>
        </Dialog>
      </div>
      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Tipo Pagamento</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
              {transactions?.map((transaction: any) => {
                const transactionDate = new Date(transaction.date);
                const day = String(transactionDate.getDate()).padStart(2, '0');
                const month = String(transactionDate.getMonth() + 1).padStart(2, '0');
                const year = transactionDate.getFullYear();
                const formattedDate = `${day}/${month}/${year}`;

                return (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.id}</TableCell>
                    <TableCell>{transaction.client}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.transactionType}</TableCell>
                    <TableCell>{transaction.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</TableCell>
                    <TableCell>{formattedDate}</TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
