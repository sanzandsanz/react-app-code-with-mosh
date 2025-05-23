import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { categories } from "@/App";

interface Props {
  onCategoryChange: (category: string) => void;
}

const Filter = ({ onCategoryChange }: Props) => {
  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        <Label htmlFor="category">Category</Label>
        <Select onValueChange={(value) => onCategoryChange(value)}>
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
      </div>
    </>
  );
};

export default Filter;
