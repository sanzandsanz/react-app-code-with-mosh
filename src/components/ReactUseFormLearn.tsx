import React from "react";
import { useForm } from "react-hook-form";

const ReactUseFormLearn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(formState.errors); shows errors in the console
  console.log(errors);

  return (
    <form
      style={{ background: "gray", padding: "20px" }}
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <div>
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          type="text"
          id="name"
          {...register("name", { required: true, minLength: 3 })}
        />
        {errors.name && errors.name.type === "required" && (
          <span style={{ color: "red" }}>Name is required</span>
        )}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          type="email"
          id="email"
          {...register("email")}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ReactUseFormLearn;
