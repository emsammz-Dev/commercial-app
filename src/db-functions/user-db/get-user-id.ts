import { PrismaClient } from "@prisma/client";

export default async function GetUserId(userEmail: string) {
  const prisma = new PrismaClient();

  const getUserId = await prisma.user.findFirst({
    where: {
      email: userEmail,
    },
  });
  if (getUserId) {
    return getUserId.id;
  }
}
