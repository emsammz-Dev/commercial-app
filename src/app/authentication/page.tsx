"use client";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

function authentication() {
  return (
    <>
      <div className="h-screen flex justify-center items-center gap-2 bg-slate-900">
        <LoginLink>
          <button className="bg-slate-700 p-2 rounded-md">Login</button>
        </LoginLink>
        <LogoutLink>
          {" "}
          <button className="bg-slate-700 p-2 rounded-md">Logout</button>
        </LogoutLink>
      </div>
    </>
  );
}

export default authentication;
