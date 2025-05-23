import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "../components/FormSchema"; // FormSchema is custom schema exported from FormSchema.tsx
import type { FormData } from "../components/FormSchema"; // FormData is custom type exported from FormSchema.tsx

const ZodForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div style={{ background: "gray", margin: "20px, auto", padding: "100px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label>Name:</label>
          <input className="form-control" {...register("name")} />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>

        <div className="mb-3">
          <label>Email:</label>
          <input className="form-control" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="mb-3">
          <label>Age:</label>
          <input
            className="form-control"
            type="number"
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ZodForm;
