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
import { CanceledError } from "axios";
import { toast } from "sonner";
import userService, { type User } from "./UserService";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const { request, cancel } = userService.getAllUsers();

    request
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) {
          console.log("Request canceled", error.message);
          return;
        }
        console.error("Error fetching users:", error);
      });

    // cleanup function
    return () => {
      cancel(); // abort the request
    };
  }, []);

  const handleDelete = (id: number) => {
    const orginalUsers = [...users];
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));

    // Simulate a delete request
    userService
      .deleteUser(id)
      .then(() => {
        console.log(`User with id ${id} deleted`);
        toast(`User deleted`);
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        toast.error(`Error deleting user: ${error.message}`);
        setUsers(orginalUsers); //
      });
  };

  const handleUpdate = (id: number) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, name: user.name + "(updated)" } : user
    );

    const updatedUser = updatedUsers.find((user) => user.id === id);

    if (updatedUser) {
      // Backend update
      userService.updateUser(id, updatedUser).then(() => {
        toast.info(`User updated`);

        // FE update
        setUsers(updatedUsers);
      });
    }
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
