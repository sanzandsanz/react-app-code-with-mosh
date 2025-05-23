import { useEffect, useState } from "react";
type User = {
  name: string;
  email: string;
};

const UserCollections = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fetch users when the component mounts
    const fetchAndSetUsers = async () => {
      const fetchedUsers = await fetchUsers();

      if (newUser != null) {
        setUsers((prevUsers) => [...prevUsers, newUser]);
      } else {
        setUsers(fetchedUsers);
      }
    };

    fetchAndSetUsers();
  }, []);

  const fetchUsers: () => Promise<User[]> = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = (await response.json()) as User[];
    return data;
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user.name}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserCollections;
