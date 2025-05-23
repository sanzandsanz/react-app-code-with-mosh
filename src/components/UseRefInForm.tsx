import React, { useRef } from "react";

const UseRefInForm = () => {
  // useRef is used to get the value of the input field
  var nameRef = useRef<HTMLInputElement>(null);

  return (
    <div style={{ background: "gray", padding: "20px" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(nameRef.current?.value);
          //   const formData = new FormData(e.currentTarget);
          //   const data = Object.fromEntries(formData.entries());
          //   console.log(data);
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            ref={nameRef}
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseRefInForm;
