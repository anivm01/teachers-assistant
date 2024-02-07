"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
interface LogoutProps {
  type: "Admin" | "Free";
}

const Logout: React.FC<LogoutProps> = ({ type }) => {
  return (
    <>
      {type === "Admin" && <Link href="/admin">Admin</Link>}
      <button
        type="button"
        onClick={() =>
          signOut({ callbackUrl: `${window.location.origin}/sign-in` })
        }
      >
        Logout
      </button>
    </>
  );
};

export default Logout;
