import { categories } from "@/App";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { ZodFormData } from "./CreateFormZodFormSchema";
import { ZodFormSchema } from "./CreateFormZodFormSchema";

interface Props {
  onFormSubmit: (data: ZodFormData) => void;
}

const CreateExpense = ({ onFormSubmit }: Props) => {
  //const form = useForm();

  const form = useForm<ZodFormData>({
    resolver: zodResolver(ZodFormSchema),
  });

  const onSubmit = (data: ZodFormData) => {
    console.log(data);
    onFormSubmit(data);
  };

  return (
    <div className="w-[500px] bg-white p-4">
      <Form {...form}>
        {/* <form onSubmit={form.handleSubmit((data) => onFormSubmit(data))}> */}
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="mb-4 pl-4 pt-4">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Description" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="mb-4 pl-4 pt-4">
                <FormLabel>Category</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Category</SelectLabel>
                      <SelectItem value="All">All</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="mb-4 pl-4 pt-4">
                <FormLabel>Amount ( $ )</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Amount" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="m-4" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateExpense;
