import axios from "axios";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

const UserData = () => {
  // Example usage inside a React component
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async (signal: AbortSignal) => {
    try {
      await new Promise((res) => setTimeout(res, 2000)); // Simulate 2s delay

      const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users",
        { signal }
      );
      setUsers(response.data);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled", error.message);
      } else {
        console.error("Error fetching data:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetchData(signal);

    return () => {
      console.log("Cleanup function called");
      abortController.abort();
    };
  }, []);

  return (
    <div>
      {isLoading && <h1> LOADING......... </h1>}
      <ul>
        {users.map((i) => (
          <li key={i.id}>
            {i.name} - {i.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserData;
