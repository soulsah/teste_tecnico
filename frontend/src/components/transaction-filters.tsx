import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const transactionFilterSchema = z.object({
  id: z.string(),
  client: z.string(),
});

type TransactionFilterSchema = z.infer<typeof transactionFilterSchema>

export function TransactionFilters(){
  const { register, handleSubmit } = useForm<TransactionFilterSchema>({
    resolver: zodResolver(transactionFilterSchema)
  });

  function handleFilterTransactions(data: TransactionFilterSchema){
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleFilterTransactions)} className="flex items-center gap-2">
      <Input placeholder="ID do Pedido" {...register('id')} />
      <Input placeholder="Nome do Cliente" {...register('client')} />
      <Button type="submit" variant="ghost">
        Pesquisar
        <Search className="w-3 h-3 ml-2"/>
      </Button>
      </form>
  )
}