import { useState } from "react";
import UserCollections from "./UserCollections";
type User = {
  name: string;
  email: string;
};

const Form = () => {
  const [user, setUser] = useState<User>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("clicked");
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data: User = Object.fromEntries(formData.entries()) as User;

    setUser(data);
    console.log(data.email);
    console.log("Form submitted:", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
      <UserCollections user={user} />
    </>
  );
};

export default Form;
