import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    alert(`Submitted Email: ${data.email}  and Password:  ${data.password}`);
  }
  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1>Sign Up </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <p style={{ color: "crimson" }}>{errors.email.message}</p>
          )}
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="password"
            placeholder="*********"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 7,
                message: "Password must be at least 7 chars",
              },
              maxLength: {
                value: 9,
                message: "Password must be at most 9 chars",
              },
            })}
          />
          {errors.password && (
            <p style={{ color: "crimson" }}>{errors.password.message}</p>
          )}
        </div>
        <button type="submit">Create account</button>
      </form>
    </div>
  );
}
