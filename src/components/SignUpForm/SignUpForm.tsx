"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function SignUpForm() {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  interface UserData {
    name: string;
    email: string;
    password: string;
  }

  const registerUser = async (data: UserData) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/sign-in");
      } else {
        const errorData = await response.json();
        console.error("Error registering user:", errorData);
        // Handle the error as needed
      }
    } catch (error) {
      console.error("An error occurred while registering the user:", error);
      // Handle the error as needed
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    data: UserData
  ) => {
    e.preventDefault();

    try {
      await registerUser(data);
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
      // Handle the error as needed
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e, data)}>
      <input
        type="text"
        name="name"
        id="name"
        required
        placeholder="jsmith"
        value={data.name}
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
        }}
      />
      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="jsmith@email.com"
        value={data.email}
        onChange={(e) => {
          setData({ ...data, email: e.target.value });
        }}
      />
      <input
        type="password"
        name="password"
        id="password"
        required
        value={data.password}
        onChange={(e) => {
          setData({ ...data, password: e.target.value });
        }}
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
}

export default SignUpForm;
