import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "./ui/dialog"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const createTransactionSchema = z.object({
  client: z.string(),
  description: z.string(),
  transactionType: z.string(),
  value: z.coerce.number()
})

type CreateTransactionSchema = z.infer<typeof createTransactionSchema>

export function CreateTransactionDialog() {
  const { register, handleSubmit } = useForm<CreateTransactionSchema>({
    resolver: zodResolver(createTransactionSchema)
  })

  function handleCreateTransaction(data: CreateTransactionSchema){
    console.log(data)
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Nova Transação</DialogTitle>
        <DialogDescription>Adicionar nova transação</DialogDescription>
      </DialogHeader>

      <form onSubmit={ handleSubmit(handleCreateTransaction)} className="space-y-6">
        <div className="grid grid-cols-4 items-center text-right gap-3">
          <Label htmlFor="client">Nome do Cliente</Label>
          <Input className="col-span-3" id="client" {...register('client')}/>
        </div>
        <div className="grid grid-cols-4 items-center text-right gap-3">
          <Label htmlFor="description">Descrição</Label>
          <Input className="col-span-3" id="description" {...register('description')}/>
        </div>
        <div className="grid grid-cols-4 items-center text-right gap-3">
          <Label htmlFor="transactionType">Tipo Pagamento</Label>
          <Input className="col-span-3" id="transactionType" {...register('transactionType')}/>
        </div>
        <div className="grid grid-cols-4 items-center text-right gap-3">
          <Label htmlFor="value">Valor</Label>
          <Input className="col-span-3" id="value" {...register('value')}/>
        </div>
        
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">Cancelar</Button>
          </DialogClose>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}