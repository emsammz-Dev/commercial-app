import { PrismaClient } from "@prisma/client";

async function getAllProductSize() {
  const prisma = new PrismaClient();

  const availSize = await prisma.size.findMany();
  return availSize;
}

export default getAllProductSize;
