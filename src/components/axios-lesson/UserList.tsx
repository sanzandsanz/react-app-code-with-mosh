import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

interface User {
  id: number;
  name: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    axios
      .get("https://jsonplaceholder.typicode.com/users", { signal: signal })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
          return;
        }
        console.error("Error fetching users:", error);
      });

    // cleanup function
    return () => {
      abortController.abort();
    };
  }, []);

  const handleDelete = (id: number) => {
    const orginalUsers = [...users];
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));

    // Simulate a delete request
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        console.log(`User with id ${id} deleted`);
        toast(`User deleted`);
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        toast(`Error deleting user: ${error.message}`);
        setUsers(orginalUsers); //
      });
  };

  const handleUpdate = (id: number) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, name: user.name + "(updated)" } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div>
      <Table className="w-[500px]">
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead> Action</TableHead>
            <TableHead> Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>
                <Button variant="outline" onClick={() => handleUpdate(item.id)}>
                  Update
                </Button>
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
      </Table>
    </div>
  );
};

export default UserList;
