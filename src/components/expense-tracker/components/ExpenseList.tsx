import type { ExpenseItem } from "@/App";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Props {
  items: ExpenseItem[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ items, onDelete }: Props) => {
  if (items.length === 0) {
    return <div>No expenses found.</div>;
  }

  const totalAmount = items
    .reduce((total, item) => total + item.amount, 0)
    .toFixed(2);

  const handleDelete = (id: number) => {
    onDelete(id);
  };

  return (
    <>
      <Table className="w-[500px]">
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead> Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.description}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell className="text-right">
                ${item.amount.toFixed(2)}
              </TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="text-right">${totalAmount}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
};

export default ExpenseList;
