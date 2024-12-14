"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function ProfileDetail() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isAuth = await isAuthenticated();
  const user = await getUser();

  return <div>{isAuth ? user.given_name : "lorem"}</div>;
}
