import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Search, PlusCircle } from "lucide-react"
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from "./components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog"
import { Label } from "./components/ui/label"

export function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Transações</h1>
      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input name="id" placeholder="ID do Pedido"/>
          <Input name="client" placeholder="Nome do Cliente"/>
          <Button type="submit" variant="ghost">
            Pesquisar
            <Search className="w-3 h-3 ml-2"/>
          </Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              Nova Transação
              <PlusCircle className="w-3 h-3 ml-2"/>
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nova Transação</DialogTitle>
              <DialogDescription>Adicionar nova transação</DialogDescription>
            </DialogHeader>

            <form className="space-y-6">
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="client">Nome do Cliente</Label>
                <Input className="col-span-3" id="client"/>
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="client">Nome do Cliente</Label>
                <Input className="col-span-3" id="client"/>
              </div>
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="description">Descrição</Label>
                <Input className="col-span-3" id="description"/>
              </div>
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="transactionType">Tipo Pagamento</Label>
                <Input className="col-span-3" id="transactionType"/>
              </div>
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="value">Valor</Label>
                <Input className="col-span-3" id="value"/>
              </div>
              
              <DialogFooter>
                <Button type="button" variant="outline">Cancelar</Button>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Tipo Pagamento</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Ações</TableHead>
          </TableHeader>
          <TableBody>
              {Array.from({ length: 10}).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>H342ADJH32</TableCell>
                    <TableCell>Matheus</TableCell>
                    <TableCell>Produto {i}</TableCell>
                    <TableCell>Crédito</TableCell>
                    <TableCell>10000.00</TableCell>
                    <TableCell>25/01/2024</TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
